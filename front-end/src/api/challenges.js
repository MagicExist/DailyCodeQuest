import api from "./client";

async function getWithFallback(primaryPath, fallbackPath) {
  try {
    const response = await api.get(primaryPath);
    return response.data;
  } catch (error) {
    const status = error?.response?.status;
    if (status !== 404) {
      throw error;
    }
    const response = await api.get(fallbackPath);
    return response.data;
  }
}

export async function getChallenges() {
  return getWithFallback("/challenges/", "/api/challenges/");
}

export async function getAchievements() {
  return getWithFallback("/achievements/", "/api/achievements/");
}
