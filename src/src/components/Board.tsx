import React from "react";
import { Card as CardInterface } from "../types";
import { Card } from '../components'

const Board : React.FC<{communityCards: CardInterface[], burnCards: CardInterface[]}> = ({communityCards, burnCards}) => {
    return <div className="board">
        <div className="burncards">
            {burnCards.map((card, key) => <Card key={key} isFlipped={false} {...card}/>)}
        </div>
        <div className="runout">
            {communityCards.map((card, key) => <Card key={key} isFlipped={true} {...card}/>)}
        </div>
    </div>
}

export default Board;