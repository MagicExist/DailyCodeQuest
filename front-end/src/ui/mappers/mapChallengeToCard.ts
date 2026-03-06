import { Challenge } from "../../domain/entities/Challenge"

export function mapChallengeToCard(challenge: Challenge) {
  return {
    heading: "Today's Challenge",
    title: challenge.title,
    teaser: challenge.description,
    streak: 4, // temporary
    achievements: challenge.achievements.map(a => ({
      title: a.title,
      color: "indigo",
      icon: "🏆",
      unlocked: true
    })),
    tags: challenge.tags.map(t => ({
      label: t.name,
      color: "indigo"
    }))
  }
}