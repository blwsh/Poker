import React from 'react';

const Pot: React.FC<{players: string[]}> = ({players}) => <div>
    {players.map(player => <div>
        {player}
    </div>)}
</div>

export default Pot;