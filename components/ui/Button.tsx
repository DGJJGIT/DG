import Link from "next/link"
import { ReactNode } from "react"

interface ButtonProps {
  href?: string
  onClick?: () => void
  variant?: "primary" | "secondary" | "ghost" | "outline"
  size?: "sm" | "md" | "lg"
  children: ReactNode
  className?: string
  type?: "button" | "submit"
  disabled?: boolean
}

const variants = {
  primary: "bg-[#0D0D0D] text-white hover:bg-[#1a1a1a]",
  secondary: "bg-[#B8962E] text-white hover:bg-[#A0801F]",
  ghost: "bg-transparent text-[#0D0D0D] hover:bg-[#F7F6F3]",
  outline: "bg-transparent border border-[#0D0D0D] text-[#0D0D0D] hover:bg-[#0D0D0D] hover:text-white",
}

const sizes = {
  sm: "px-4 py-2 text-[12.5px]",
  md: "px-5 py-2.5 text-[13.5px]",
  lg: "px-7 py-3.5 text-[14px]",
}

export default function Button({
  href,
  onClick,
  variant = "primary",
  size = "md",
  children,
  className = "",
  type = "button",
  disabled,
}: ButtonProps) {
  const base = `inline-flex items-center justify-center gap-2 font-medium rounded-md transition-colors ${variants[variant]} ${sizes[size]} ${className}`
  if (href) return <Link href={href} className={base}>{children}</Link>
  return (
    <button type={type} onClick={onClick} disabled={disabled} className={base}>
      {children}
    </button>
  )
}
