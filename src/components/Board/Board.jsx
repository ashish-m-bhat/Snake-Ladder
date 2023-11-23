import React, { useEffect, useState } from 'react'
import EachTile from './EachTile';
import { getTiles } from '../../utils/helper';

function Board(props) {
    const {
        playerScore,
        setPlayerScore
    } = props;

    const [tiles, setTiles] = useState(getTiles());
    console.log('playerScore', playerScore);

    return (
    <div className='tiles-wrapper'>
        {tiles.map((tile, index) => {
            return (
                <EachTile
                    key={tile.value}
                    tile={tile}
                    playerScore={playerScore}
                    setPlayerScore={setPlayerScore}
                />
            )
        })}
    </div>
  )
}

export default Board;