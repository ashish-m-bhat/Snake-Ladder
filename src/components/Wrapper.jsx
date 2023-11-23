import React, { useEffect, useState } from 'react'
import Board from './Board/Board';
import Dice from './Dice/Dice';

function Wrapper() {
  const [playerScore, setPlayerScore] = useState(0);
  return (
    <div className='app-wrapper'>
        <Board playerScore={playerScore} setPlayerScore={setPlayerScore} />
        <Dice playerScore={playerScore} setPlayerScore={setPlayerScore} />
    </div>
  )
}

export default Wrapper;
