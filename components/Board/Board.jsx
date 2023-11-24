import React, { useEffect, useState } from 'react'
import EachTile from './EachTile';
import { getTiles } from '../../utils/helper';

function Board(props) {
    const {
        playerScore,
        setPlayerScore,
        currentPlayer
    } = props;

    const [tiles, setTiles] = useState(getTiles());

    return (
    <div className='tiles-wrapper'>
        {tiles.map((tile, index) => {
            return (
                <EachTile
                    key={tile.value}
                    tile={tile}
                    playerScore={playerScore}
                    setPlayerScore={setPlayerScore}
                    currentPlayer={currentPlayer}
                />
            )
        })}
    </div>
  )
}

export default Board;