function Achievement({
  icon = "🏆",
  title = "",
  color = "yellow",
  unlocked = true,
  size = 40, // px
}) {
  const colorStyles = {
    yellow: {
      border: "border-yellow-400/30",
      bg: "bg-yellow-400/10",
      text: "text-yellow-400",
    },
    pink: {
      border: "border-pink-400/30",
      bg: "bg-pink-400/10",
      text: "text-pink-400",
    },
    orange: {
      border: "border-orange-400/30",
      bg: "bg-orange-400/10",
      text: "text-orange-400",
    },
    indigo: {
      border: "border-indigo-400/30",
      bg: "bg-indigo-400/10",
      text: "text-indigo-400",
    },
  }

  const selected = colorStyles[color] || colorStyles.yellow

  return (
    <div
      title={title}
      style={{ width: size, height: size }}
      className={`flex items-center justify-center rounded-full border shadow-md transition
        ${unlocked
          ? `${selected.border} ${selected.bg} ${selected.text} hover:scale-105`
          : "border-white/10 bg-white/5 text-gray-500 opacity-60"}
      `}
    >
      {icon}
    </div>
  )
}

export default Achievement