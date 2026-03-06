import { Tag } from "./Tag"
import { Achievement } from "./Achievement"

export class Challenge {
  constructor(
    public id: number,
    public title: string,
    public description: string,
    public image: string,
    public tags: Tag[],
    public achievements: Achievement[]
  ) {}
}