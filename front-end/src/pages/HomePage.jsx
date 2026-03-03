import { useEffect, useState } from "react";
import ChallengeCard from "../components/ChallengeCard/ChallengeCard";
import { getAchievements, getChallenges } from "../api/challenges";

const achievementColors = ["orange", "pink", "indigo", "yellow"];
const tagColors = ["indigo", "green", "yellow", "pink", "default"];

function normalizeList(payload) {
  if (Array.isArray(payload)) {
    return payload;
  }
  if (Array.isArray(payload?.results)) {
    return payload.results;
  }
  return [];
}

function toText(value, fallback) {
  if (typeof value === "string" && value.trim()) {
    return value.trim();
  }
  return fallback;
}

function mapToCard(challenge, achievements) {
  const tagLabels = Array.isArray(challenge?.conditions)
    ? challenge.conditions.filter((item) => typeof item === "string" && item.trim())
    : [];

  const tags = tagLabels.slice(0, 3).map((label, index) => ({
    label,
    color: tagColors[index % tagColors.length],
  }));

  const achievementItems = achievements.slice(0, 3).map((achievement, index) => ({
    title: toText(achievement?.title, `Achievement ${index + 1}`),
    icon: "🏆",
    color: achievementColors[index % achievementColors.length],
    unlocked: false,
  }));

  return {
    heading: "Today’s Challenge",
    title: toText(challenge?.title, "Untitled challenge"),
    teaser: toText(
      challenge?.description,
      "Open this challenge to view the full statement."
    ),
    streak: 0,
    achievements: achievementItems,
    tags,
  };
}

function HomePage() {
  const [challenge, setChallenge] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let mounted = true;

    async function loadData() {
      setLoading(true);
      setError("");

      try {
        const [challengesPayload, achievementsPayload] = await Promise.all([
          getChallenges(),
          getAchievements(),
        ]);

        const challenges = normalizeList(challengesPayload);
        const achievements = normalizeList(achievementsPayload);

        if (!challenges.length) {
          throw new Error("No challenges found");
        }

        if (mounted) {
          setChallenge(mapToCard(challenges[0], achievements));
        }
      } catch {
        if (mounted) {
          setError("Could not load challenge data.");
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    loadData();
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <main className="min-h-screen w-full flex items-center justify-center px-4 py-8">
      {loading && <p className="text-gray-300">Loading daily challenge...</p>}

      {!loading && error && <p className="text-red-400">{error}</p>}

      {!loading && !error && <ChallengeCard challenge={challenge ?? undefined} />}
    </main>
  );
}

export default HomePage;
