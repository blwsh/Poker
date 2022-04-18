import React from "react";
import { Card as CardInterface } from "../types";

const Card: React.FC<CardInterface> = ({suit, value, string, isFlipped = false}) => {
    return isFlipped 
        ? <img className="card" src={`/images/cards/${string}.svg`}/>
        : <img className="card" src={`/images/cards/1B.svg`}/>
}

export default Card;