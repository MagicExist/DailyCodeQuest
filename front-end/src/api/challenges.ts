import api from "./client"
import DailyChallengeDTO from "./dto/DailyChallengeDTO"

async function getWithFallback(primaryPath: string, fallbackPath: string) {
  try {
    const response = await api.get(primaryPath)
    return response.data
  } catch (error: any) {
    const status = error?.response?.status
    if (status !== 404) {
      throw error
    }

    const response = await api.get(fallbackPath)
    return response.data
  }
}

export async function getDailyChallenge(): Promise<DailyChallengeDTO[]> {
  return getWithFallback("/daily_challenge/", "/api/daily_challenge/")
}