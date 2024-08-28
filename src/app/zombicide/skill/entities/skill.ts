export class Skill {
  private readonly _id: number;
  private readonly _name: string;
  private readonly _description: string;

  constructor(id: number, name: string, description: string) {
    this._id = id;
    this._name = name;
    this._description = description;
  }

  get id(): number {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get description(): string {
    return this._description;
  }
}
