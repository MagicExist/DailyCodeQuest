function Tag({
  label = "Tag",
  color = "default",
  icon,
  active = false,
}) {
  const colorStyles = {
    default: "bg-white/5 border-white/10 text-gray-300",
    indigo: "bg-indigo-400/10 border-indigo-400/30 text-indigo-400",
    green: "bg-green-400/10 border-green-400/30 text-green-400",
    yellow: "bg-yellow-400/10 border-yellow-400/30 text-yellow-400",
    pink: "bg-pink-400/10 border-pink-400/30 text-pink-400",
  }

  const selected = colorStyles[color] || colorStyles.default

  return (
    <span
      className={`
        inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-medium
        transition duration-200
        ${selected}
        ${active ? "ring-1 ring-white/20 scale-105" : "hover:scale-105"}
      `}
    >
      {icon && <span>{icon}</span>}
      {label}
    </span>
  )
}

export default Tag