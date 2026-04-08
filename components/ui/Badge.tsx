import { ReactNode } from "react"

interface BadgeProps {
  children: ReactNode
  variant?: "default" | "gold" | "muted"
}

const variants = {
  default: "bg-[#F7F6F3] text-[#3D3D3D] border border-[#E2DFD8]",
  gold: "bg-[#F5EDD4] text-[#7A5F10] border border-[#D4AF37]/30",
  muted: "bg-[#EFEDE8] text-[#737373]",
}

export default function Badge({ children, variant = "default" }: BadgeProps) {
  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded text-[11.5px] font-medium ${variants[variant]}`}>
      {children}
    </span>
  )
}
