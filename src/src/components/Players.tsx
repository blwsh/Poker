import React from 'react';
import { Player } from '../components';
import { Player as PlayerInterface } from '../types';

const Players: React.FC<{players: PlayerInterface[]}> = ({players}) => {
    return (
        <div className='players-container'>
            {players.map((player, key) => <Player key={key} {...player}/>)}
        </div>
    )
}

export default Players;