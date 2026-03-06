export class Achievement {
  constructor(
    public id: number,
    public title: string,
    public image: string,
    public conditions: string[]
  ) {}
}