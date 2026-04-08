import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  try {
    const { firstName, lastName, email, company, subject, message } = await req.json()

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
          message: subject ? `[${subject}] ${message}` : message,
          hs_lead_status: "NEW",
        },
      }),
    })

    if (!res.ok) {
      const err = await res.json()
      // If contact already exists, update it instead
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
                message: subject ? `[${subject}] ${message}` : message,
                hs_lead_status: "NEW",
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
