import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const {
      firstName, lastName, email, company, phone,
      address, city, state, zip,
      service, volume, geography, notes,
      seoService, utm_source, utm_medium, utm_campaign, utm_term, utm_content,
      first_touch_referrer, first_touch_landing,
    } = await req.json()

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 })
    }

    const messageBody = [
      `Service: ${service}`,
      `Monthly Volume: ${volume}`,
      geography ? `Geography: ${geography}` : null,
      notes ? `Additional Requirements: ${notes}` : null,
    ]
      .filter(Boolean)
      .join("\n")

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
          address: address || "",
          city: city || "",
          state: state || "",
          zip: zip || "",
          message: messageBody,
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
                address: address || "",
                city: city || "",
                state: state || "",
                zip: zip || "",
                message: messageBody,
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
      } else {
        throw new Error(err.message || "HubSpot API error")
      }
    }

    return NextResponse.json({ success: true })
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error"
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
