import { useEffect, useState } from "react";
import ChallengeCard from "../components/ChallengeCard/ChallengeCard";
import { getDailyChallenge } from "../api/challenges";
import { mapChallenge } from "../api/mappers/MapChallenge";
import DailyChallengeDTO from "../api/dto/DailyChallengeDTO";
import { Challenge } from "../domain/entities/Challenge";
import { mapChallengeToCard } from "../ui/mappers/mapChallengeToCard";

type ChallengeCardModel = {
  heading: string;
  title: string;
  teaser: string;
  streak: number;
  achievements: {
    title: string;
    color: string;
    icon: string;
    unlocked: boolean;
  }[];
  tags: {
    label: string;
    color: string;
  }[];
};


function HomePage() {
  const [challenge, setChallenge] = useState<null | ChallengeCardModel>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let mounted = true;

    async function loadData() {
      setLoading(true);
      setError("");

      try {
        const payload = await getDailyChallenge()

        if (!payload.length) {
          throw new Error("No challenge found");
        }

        if (mounted) {
          const challengeEntity = mapChallenge(payload[0].challenge)
          const cardData = mapChallengeToCard(challengeEntity)

          setChallenge(cardData)
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
