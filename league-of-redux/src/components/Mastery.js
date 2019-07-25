import React from 'react';

import MasteredChamp from './MasteredChamp';

const Mastery = (props) => {
    return (
        <div>
            {props.mastery.map(masteredChamp => (
                <MasteredChamp key={masteredChamp.championId} masteredChamp={masteredChamp} />
            ))}
        </div>
    )
}

export default Mastery;