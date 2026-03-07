export default function StatCard({
  value,
  label,
}: {
  value: string
  label: string
}) {
  return (
    <div className="flex flex-col items-center gap-1 rounded-xl bg-dt-surface-cta px-5 py-3.5">
      <span className="text-[22px] font-extrabold text-dt-primary">{value}</span>
      <span className="text-[11px] text-dt-body">{label}</span>
    </div>
  )
}
