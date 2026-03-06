import { Challenge } from "../../domain/entities/Challenge"
import { ChallengeDTO } from "../dto/ChallengeDTO"


export function mapChallenge(dto: ChallengeDTO): Challenge {
  return new Challenge(
    dto.id,
    dto.title,
    dto.description,
    dto.image,
    dto.tags,
    dto.achievement
  )
}