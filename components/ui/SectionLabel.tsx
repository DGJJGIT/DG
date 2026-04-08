interface SectionLabelProps {
  children: string
  light?: boolean
}
export default function SectionLabel({ children, light }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-2.5 mb-3">
      <span className="gold-bar" />
      <span className={`text-[11.5px] font-semibold uppercase tracking-[0.12em] ${light ? "text-[#A3A3A3]" : "text-[#B8962E]"}`}>
        {children}
      </span>
    </div>
  )
}
