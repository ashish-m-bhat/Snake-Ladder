import React, { useEffect, useState } from 'react'
import { PLAYER1, PLAYER2 } from '../utils/constants';
import Board from './Board/Board';
import InitialPlayers from './Board/InitialPlayers';
import Dice from './Dice/Dice';

function Wrapper() {
  const [playerScore, setPlayerScore] = useState({
    [PLAYER1]: 0,
    [PLAYER2]: 0
  });

  const [currentPlayer, setCurrentPlayer] = useState(PLAYER1);
  return (
    <div className='app-wrapper'>
        <h2 className='player-turn'>{currentPlayer === 0 ? 'Player-1' : 'Player-2'}'s turn</h2>
        <InitialPlayers playerScore={playerScore} />
        <Board playerScore={playerScore} setPlayerScore={setPlayerScore} setCurrentPlayer={setCurrentPlayer} currentPlayer={currentPlayer} />
        <Dice playerScore={playerScore} setPlayerScore={setPlayerScore} currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer} />
    </div>
  )
}

export default Wrapper;
