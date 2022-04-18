export interface ChipStack {
    25: number
    100: number
    500: number
    1000: number
    5000: number
    total: number
}

export interface Deck {
    cards: Card[]
    take(): Card
}

export interface Card {
    suit: number
    value: number
    string: string
    isFlipped?: boolean
}

export interface Player {
    id: string
    name: string
    stack?: ChipStack|null
    hand: Card[]
    dealt: boolean
    folded: boolean
    allIn: boolean
    hasCalled: boolean
    isButton: boolean
    isSmallBlind: boolean
    isBigBlind: boolean
    inGame: boolean
  }