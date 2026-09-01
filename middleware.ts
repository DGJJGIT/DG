import { NextRequest, NextResponse } from "next/server"

const APEX = "https://deliverygroupinc.com"

export function middleware(request: NextRequest) {
  const host = request.headers.get("host") || ""
  if (host.startsWith("www.")) {
    const { pathname, search } = request.nextUrl
    return NextResponse.redirect(`${APEX}${pathname}${search}`, { status: 301 })
  }
  return NextResponse.next()
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
}
