export class Character {
  private readonly _id: number;
  private readonly _name: string;
  private readonly _wounds: number;
  private readonly _image: string;
  private readonly _blueSkill: string | null;
  private readonly _yellowSkill: string | null;
  private readonly _firstOrangeSkill: string | null;
  private readonly _secondOrangeSkill: string | null;
  private readonly _firstRedSkill: string | null;
  private readonly _secondRedSkill: string | null;
  private readonly _thirdRedSkill: string | null;

  constructor(
    id: number,
    name: string,
    wounds: number,
    image: string,
    blueSkill: string | null = null,
    yellowSkill: string | null = null,
    firstOrangeSkill: string | null = null,
    secondOrangeSkill: string | null = null,
    firstRedSkill: string | null = null,
    secondRedSkill: string | null = null,
    thirdRedSkill: string | null = null,
  ) {
    this._id = id;
    this._name = name;
    this._wounds = wounds;
    this._image = image;
    this._blueSkill = blueSkill;
    this._yellowSkill = yellowSkill;
    this._firstOrangeSkill = firstOrangeSkill;
    this._secondOrangeSkill = secondOrangeSkill;
    this._firstRedSkill = firstRedSkill;
    this._secondRedSkill = secondRedSkill;
    this._thirdRedSkill = thirdRedSkill;
  }

  get id(): number {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get wounds(): number {
    return this._wounds;
  }

  get image(): string {
    return this._image;
  }

  get blueSkill(): string | null {
    return this._blueSkill;
  }

  get yellowSkill(): string  | null{
    return this._yellowSkill;
  }

  get firstOrangeSkill(): string | null {
    return this._firstOrangeSkill;
  }

  get secondOrangeSkill(): string | null {
    return this._secondOrangeSkill;
  }

  get firstRedSkill(): string | null {
    return this._firstRedSkill;
  }

  get secondRedSkill(): string | null {
    return this._secondRedSkill;
  }

  get thirdRedSkill(): string | null {
    return this._thirdRedSkill;
  }
}
