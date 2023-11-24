import React, { useEffect } from 'react'
import { PLAYER1, PLAYER2 } from '../../utils/constants';

function EachTile(props) {
  const {
    tile,
    playerScore,
    setPlayerScore,
    currentPlayer
  } = props;
  const backgroundColor = tile.value % 2 === 0 ? '#FFF' : '#a6c3f1';
// console.log('currentPlayer',currentPlayer);
  useEffect(() => {
    if (playerScore[currentPlayer] === tile.value && tile.snake.start === true) {
      setPlayerScore(val => ({
        ...val,
        [currentPlayer]: tile.snake.end
      }));
    } else if (playerScore[currentPlayer] === tile.value && tile.ladder.start === true) {
      setPlayerScore(val => ({
        ...val,
        [currentPlayer]:tile.ladder.end
      }));
    }
  }, [playerScore]);
  return (
    <>
        <div
          className='eachTile-container'
          style={{ backgroundColor }}
        >
          {playerScore[PLAYER1] === tile.value && <p className='player player1'></p>}
          {playerScore[PLAYER2] === tile.value && <p className='player player2'></p>}
          {playerScore[PLAYER1] !== tile.value && playerScore[PLAYER2] !== tile.value && <p className='eachTile'>{tile.value}</p>}
          {tile.ladder.start && <div className={`ladder ladder-${tile.value}`}></div>}
          {tile.snake.start && <div className={`snake snake-${tile.value}`}></div>}
        </div>
    </>
  )
}

export default EachTile