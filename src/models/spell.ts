export interface Spell {
    name: string,
    description: string,
    isPrepared: boolean,
    isVerbal: boolean,
    isSomatic: boolean,
    isMaterial: boolean,
    isConcentration: boolean,
    castTime: CastTime,
    spellLevel: SpellLevel.Cantrip,
}

export enum CastTime {
    Action = 'Action',
    BonusAction = 'Bonus Action',
}
export enum SpellLevel {
    Cantrip = 'Cantrip',
    One = '1',
    Two = '2',
    Three = '3',
}
