import { NextRequest, NextResponse } from "next/server"
import { backupLead } from "@/lib/leads-backup"

export async function POST(req: NextRequest) {
  try {
    const { firstName, lastName, email, company, subject, message } = await req.json()

    const missing = []
    if (!firstName?.trim()) missing.push("First name")
    if (!lastName?.trim())  missing.push("Last name")
    if (!email?.trim())     missing.push("Email")
    if (!company?.trim())   missing.push("Company")
    if (!subject?.trim())   missing.push("Subject")
    if (!message?.trim())   missing.push("Message")
    if (missing.length > 0) {
      return NextResponse.json(
        { error: `Please fill in all required fields: ${missing.join(", ")}.` },
        { status: 400 }
      )
    }

    // Local backup before touching HubSpot
    backupLead({ source: "contact", firstName, lastName, email, company, subject, message })

    const contactProperties = {
      firstname: firstName,
      lastname: lastName,
      email,
      company,
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

    if (contactId) {
      const noteBody = `
<h3>Contact Form Submission</h3>

<p><strong>Contact</strong></p>
<ul>
  <li><strong>Name:</strong> ${firstName} ${lastName}</li>
  <li><strong>Email:</strong> ${email}</li>
  <li><strong>Company:</strong> ${company}</li>
</ul>

<p><strong>Message</strong></p>
<ul>
  <li><strong>Subject:</strong> ${subject}</li>
  <li><strong>Message:</strong> ${message}</li>
</ul>`.trim()

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
