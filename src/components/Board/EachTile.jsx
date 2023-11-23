import React, { useEffect } from 'react'

function EachTile(props) {
  const {
    tile,
    playerScore,
    setPlayerScore
  } = props;
  const backgroundColor = tile.value % 2 === 0 ? '#FFF' : '#a6c3f1';

  useEffect(() => {
    if (playerScore === tile.value && tile.snake.start === true) {
      setPlayerScore(tile.snake.end);
    } else if (playerScore === tile.value && tile.ladder.start === true) {
      setPlayerScore(tile.ladder.end);
    }
  }, [playerScore]);
  return (
    <>
        <div
          className='eachTile-container'
          style={{ backgroundColor }}
        >
            <p className={playerScore === tile.value ? 'player': 'eachTile'}>
              {tile.value}
            </p>
            {tile.ladder.start && <div className={`ladder ladder-${tile.value}`}></div>}
            {tile.snake.start && <div className={`snake snake-${tile.value}`}></div>}
        </div>
    </>
  )
}

export default EachTile