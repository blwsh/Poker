import React from 'react';
import { Player } from '../types';
import { Card } from '../components'

function nFormatter(num: number, digits: number = 1) {
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "k" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "G" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" }
  ];
  
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;

  var item = lookup.slice().reverse().find(function(item) {
    return num >= item.value;
  });

  return item ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol : "0";
}

const Players: React.FC<{players: Player[]}> = ({players}) => {
    return (
        <div className='players-container'>
            {players.map((player, key) => {
                const playerClasses = ['player'];

                if (player.isButton) playerClasses.push('player--button')
                if (player.isSmallBlind) playerClasses.push('player--small-blind')
                if (player.isBigBlind) playerClasses.push('player--big-blind')
                if (player.allIn) playerClasses.push('player--all-in')
                if (player.folded) playerClasses.push('player--folded')
                if (!player.inGame) playerClasses.push('player--out')

                return <div key={key} className={playerClasses.join(' ')}>
                    <img src='https://ftw.usatoday.com/wp-content/uploads/sites/90/2017/12/xxx_father_andrew_trapp_hnb_priest_poker__er7033_27762637-e1513627020602.jpg?w=1000&h=600&crop=1' className='player__image'/>
                    <div className='player__info'>
                        <span className="player__stack">{player.stack && nFormatter(player.stack.total).toUpperCase()}</span>
                        <span className="player__name">{player.name}</span>
                        <div>
                            {player.isButton && <img src='/images/dealer.svg' className='player__button'/>}
                            {player.isSmallBlind&& <img src='/images/small-blind.svg' className='player__button player__small-blind'/>}
                            {player.isBigBlind && <img src='/images/big-blind.svg' className='player__button player__big-blind'/>}
                            {
                                player.allIn ? <img src='/images/all-in.svg' className='player__all-in-chip'/> : 
                                player.hasCalled ? <span className="player__status">Call</span> : 
                                player.folded ? <span className="player__status">Fold</span> : '' 
                            }
                        </div>
                    </div>
                    <div className="player__cards">
                        {player.hand.map((card, key) => <Card key={key} isFlipped={true} {...card}/>)}
                    </div>
                </div>
            })}
        </div>
    )
}

export default Players;