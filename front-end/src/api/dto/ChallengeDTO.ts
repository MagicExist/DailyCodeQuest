import { AchievementDTO } from "./AchievementDTO"
import { TagDTO } from "./TagDTO"

export interface ChallengeDTO {
    id: number,
    achievement: AchievementDTO[]
    tags: TagDTO[]
    title: string,
    description: string,
    conditions: string[]
    image:string
    date:string
}