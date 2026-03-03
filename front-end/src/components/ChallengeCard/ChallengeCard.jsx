import Achievement from "./complements/Achievements"
import Tag from "./complements/Tag"

const defaultChallenge = {
    heading: "Today’s Challenge",
    title: "Predict the Output: Closures",
    teaser: "What does this snippet log? (JS closures + scope)",
    streak: 4,
    achievements: [
        { title: "First Solve", color: "orange", icon: "🏁", unlocked: false },
        { title: "Thinker", color: "pink", icon: "🧠", unlocked: true },
        { title: "Speed Run", color: "indigo", icon: "⚡", unlocked: true },
    ],
    tags: [
        { label: "JavaScript", color: "indigo" },
        { label: "Closures", color: "default" },
        { label: "Easy", color: "green" },
    ],
}

function ChallengeCard({
    challenge = defaultChallenge,
    onPreview = () => { },
    onSave = () => { },
    onStart = () => { },
}) {
    const {
        heading,
        title,
        teaser,
        streak,
        achievements = [],
        tags = [],
    } = challenge

    return (
        <section className="w-full max-w-xl">
            <div className="group relative cursor-pointer rounded-2xl border border-indigo-500/30 bg-[#2b2b2b] p-6 shadow-xl transition hover:-translate-y-0.5 hover:shadow-2xl">

                {/* Header */}
                <div className="flex items-start justify-between gap-4">
                    <div>
                        <p className="text-sm font-medium text-gray-400">
                            {heading}
                        </p>
                        <h2 className="mt-1 text-xl font-semibold tracking-tight text-white">
                            {title}
                        </h2>
                    </div>

                    {/* Streak */}
                    <div className="shrink-0 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-medium text-gray-200 transition hover:scale-105">
                        {streak} 🔥
                    </div>
                </div>

                {/* Teaser */}
                <p className="mt-3 text-sm text-gray-400">
                    {teaser}
                </p>

                {/* Achievements (LEFT) + Tags (RIGHT) */}
                <div className="mt-5 flex items-center justify-between gap-4">

                    {/* Achievements - circular badges */}
                    <div>
                        <p className="text-xs font-medium text-gray-400 mb-2">
                            Achievements
                        </p>
                        <div className="flex items-center gap-3">
                            {achievements.map((achievement, index) => (
                                <Achievement
                                    key={`${achievement.title || "achievement"}-${index}`}
                                    title={achievement.title}
                                    color={achievement.color}
                                    icon={achievement.icon}
                                    unlocked={achievement.unlocked}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-col flex-wrap items-center gap-2">
                        <p className="text-xs font-medium text-gray-400 mb-2">
                            Tags
                        </p>
                        <div className="flex flex-wrap items-center gap-2">
                            {tags.map((tag, index) => (
                                <Tag
                                    key={`${tag.label || "tag"}-${index}`}
                                    label={tag.label}
                                    color={tag.color}
                                    icon={tag.icon}
                                    active={tag.active}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Actions */}
                <div className="mt-6 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                        <button
                            onClick={onPreview}
                            type="button"
                            className="rounded-xl bg-black/40 px-4 py-2 text-sm font-medium text-gray-200 transition hover:bg-black/60"
                        >
                            Preview
                        </button>

                        <button
                            onClick={onSave}
                            type="button"
                            className="rounded-xl bg-black/40 px-4 py-2 text-sm font-medium text-gray-200 transition hover:bg-black/60"
                        >
                            Save
                        </button>
                    </div>

                    <button
                        onClick={onStart}
                        type="button"
                        className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-5 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-indigo-500"
                    >
                        Start →
                    </button>
                </div>

                {/* Subtle hover glow */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-transparent transition group-hover:ring-indigo-500/30" />
            </div>
        </section>
    )
}

export default ChallengeCard
