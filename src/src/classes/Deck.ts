import { Card, Deck as DeckInterface } from "../types";

function range(size: number, startAt: number = 0) {
    return [...Array(size).keys() as any].map(i => i + startAt);
}

class Deck implements DeckInterface {
    cards: Card[] = [];

    constructor() {
        const cards: Card[] = [];

        const cardValueMap: any = {10: 'T', 11: 'J', 12: 'Q', 13: 'K', 14: 'A'};
        const cardSuitMap: any = {1: 'D', 2: 'H', 3: 'C', 4: 'S'};

        range(4, 1).map(suit => {
            range(13, 2).map(value => {
                let string = (value > 9 ? cardValueMap[value] : value) + cardSuitMap[suit]
                cards.push({suit, value, string})
            })
        })

        this.cards = cards;
    }

    shuffle() {
        this.cards = this.cards.sort(() => .5 - Math.random());
        return this;
    }

    take(): Card {
        const taken = this.cards[0];
        this.cards = this.cards.slice(1)
        return taken;
    }
}

export default Deck;