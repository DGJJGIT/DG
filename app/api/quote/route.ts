import { NextRequest, NextResponse } from "next/server"
import { backupLead } from "@/lib/leads-backup"

export async function POST(req: NextRequest) {
  try {
    const {
      firstName, lastName, email, company, phone, service, volume, geography, notes,
      bot_field, cfToken,
      seoService, utm_source, utm_medium, utm_campaign, utm_term, utm_content,
      first_touch_referrer, first_touch_landing,
    } = await req.json()

    // Honeypot — bots fill this hidden field; real users never see it
    if (bot_field) {
      return NextResponse.json({ success: true })
    }

    // Server-side required field validation (mirrors client-side required attributes)
    const missing = []
    if (!firstName?.trim()) missing.push("First name")
    if (!lastName?.trim())  missing.push("Last name")
    if (!email?.trim())     missing.push("Email")
    if (!company?.trim())   missing.push("Company")
    if (!phone?.trim())     missing.push("Phone")
    if (!service?.trim())   missing.push("Service")
    if (!volume?.trim())    missing.push("Monthly volume")
    if (!geography?.trim()) missing.push("Delivery geography")
    if (missing.length > 0) {
      return NextResponse.json(
        { error: `Please fill in all required fields: ${missing.join(", ")}.` },
        { status: 400 }
      )
    }

    // Turnstile verification — only enforced when secret is configured
    const turnstileSecret = process.env.TURNSTILE_SECRET_KEY
    if (turnstileSecret) {
      if (!cfToken) {
        return NextResponse.json({ error: "Please complete the security check." }, { status: 400 })
      }
      const tvRes = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ secret: turnstileSecret, response: cfToken }),
      })
      const tvData = await tvRes.json() as { success: boolean }
      if (!tvData.success) {
        return NextResponse.json({ error: "Security check failed. Please refresh and try again." }, { status: 400 })
      }
    }

    // ── Local backup — written before HubSpot so data is never lost ──────────
    backupLead({
      source: "quote",
      firstName, lastName, email, company, phone,
      service, volume, geography, notes,
      seoService, utm_source, utm_medium, utm_campaign,
      first_touch_landing, utm_content,
    })

    // Use only standard HubSpot contact properties — custom properties silently drop if they haven't
    // been created in the portal first (Settings → Properties → Create property).
    // "service" maps to jobtitle so it's visible on the contact card immediately without any portal setup.
    const contactProperties = {
      firstname: firstName,
      lastname: lastName,
      email,
      company,
      phone,
      jobtitle: service,
      hs_lead_status: "NEW",
    }

    const res = await fetch("https://api.hubapi.com/crm/v3/objects/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.HUBSPOT_API_KEY}`,
      },
      body: JSON.stringify({ properties: contactProperties }),
    })

    let contactId: string | null = null

    if (!res.ok) {
      const err = await res.json()
      if (err.category === "CONFLICT") {
        // Contact with this email already exists — update it
        const existing = await fetch(
          `https://api.hubapi.com/crm/v3/objects/contacts/${encodeURIComponent(email)}?idProperty=email`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${process.env.HUBSPOT_API_KEY}`,
            },
            body: JSON.stringify({ properties: contactProperties }),
          }
        )
        if (!existing.ok) throw new Error("Failed to update existing contact")
        const existingData = await existing.json()
        contactId = existingData.id
      } else {
        throw new Error(err.message || "HubSpot API error")
      }
    } else {
      const contactData = await res.json()
      contactId = contactData.id
    }

    // Attach a Note with all form fields — visible in the contact's Activity feed.
    // This is the complete record of everything the lead submitted.
    if (contactId) {
      const noteBody = [
        "=== Quote Form Submission ===",
        "",
        `Name:    ${firstName} ${lastName}`,
        `Email:   ${email}`,
        `Company: ${company}`,
        `Phone:   ${phone}`,
        "",
        `Service Requested:  ${service}`,
        `Monthly Volume:     ${volume}`,
        `Delivery Geography: ${geography}`,
        notes ? `\nAdditional Requirements:\n${notes}` : null,
        "",
        "=== Attribution ===",
        `Source Page:       ${seoService ? `/${seoService}` : "/quote"}`,
        utm_source   ? `UTM Source:        ${utm_source}`   : null,
        utm_medium   ? `UTM Medium:        ${utm_medium}`   : null,
        utm_campaign ? `UTM Campaign:      ${utm_campaign}` : null,
        utm_term     ? `UTM Term:          ${utm_term}`     : null,
        utm_content  ? `UTM Content:       ${utm_content}`  : null,
        first_touch_landing  ? `First Touch URL:   ${first_touch_landing}`  : null,
        first_touch_referrer ? `First Touch Ref:   ${first_touch_referrer}` : null,
      ].filter((l) => l !== null).join("\n")

      await fetch("https://api.hubapi.com/crm/v3/objects/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.HUBSPOT_API_KEY}`,
        },
        body: JSON.stringify({
          properties: {
            hs_note_body: noteBody,
            hs_timestamp: new Date().toISOString(),
          },
          associations: [
            {
              to: { id: contactId },
              types: [{ associationCategory: "HUBSPOT_DEFINED", associationTypeId: 202 }],
            },
          ],
        }),
      })
    }

    return NextResponse.json({ success: true })
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error"
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
