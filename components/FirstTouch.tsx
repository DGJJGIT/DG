"use client"

import { useEffect } from "react"
import { captureFirstTouch } from "@/lib/first-touch"

// Stores the visitor's first-touch source once (see lib/first-touch.ts). Renders nothing.
export default function FirstTouch() {
  useEffect(() => {
    captureFirstTouch()
  }, [])
  return null
}
