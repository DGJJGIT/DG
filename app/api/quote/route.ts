import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const {
      firstName, lastName, email, company, phone, service, volume, geography, notes,
      seoService, utm_source, utm_medium, utm_campaign, utm_term, utm_content,
      first_touch_referrer, first_touch_landing,
    } = await req.json()

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 })
    }

    const res = await fetch("https://api.hubapi.com/crm/v3/objects/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.HUBSPOT_API_KEY}`,
      },
      body: JSON.stringify({
        properties: {
          firstname: firstName,
          lastname: lastName,
          email,
          company,
          phone,
          hs_lead_status: "NEW",
          seo_keyword: seoService || service || "",
          landing_page: seoService ? `/${seoService}` : "",
          monthly_volume: volume || "",
          utm_source: utm_source || "",
          utm_medium: utm_medium || "",
          utm_campaign: utm_campaign || "",
          utm_term: utm_term || "",
          utm_content: utm_content || "",
          first_touch_referrer: first_touch_referrer || "",
          first_touch_landing: first_touch_landing || "",
        },
      }),
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
            body: JSON.stringify({
              properties: {
                firstname: firstName,
                lastname: lastName,
                company,
                phone,
                hs_lead_status: "NEW",
                seo_keyword: seoService || service || "",
                landing_page: seoService ? `/${seoService}` : "",
                monthly_volume: volume || "",
                utm_source: utm_source || "",
                utm_medium: utm_medium || "",
                utm_campaign: utm_campaign || "",
                utm_term: utm_term || "",
                utm_content: utm_content || "",
                first_touch_referrer: first_touch_referrer || "",
                first_touch_landing: first_touch_landing || "",
              },
            }),
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

    // Create a Note with the full quote details so they appear in Activities
    if (contactId) {
      const noteLines = [
        `Service: ${service || "—"}`,
        `Monthly Volume: ${volume || "—"}`,
        geography ? `Delivery Geography: ${geography}` : null,
        notes ? `Additional Requirements: ${notes}` : null,
        ``,
        `Source page: ${seoService ? `/${seoService}` : "/quote"}`,
        utm_source ? `UTM Source: ${utm_source}` : null,
      ].filter((l) => l !== null).join("\n")

      await fetch("https://api.hubapi.com/crm/v3/objects/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.HUBSPOT_API_KEY}`,
        },
        body: JSON.stringify({
          properties: {
            hs_note_body: noteLines,
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
