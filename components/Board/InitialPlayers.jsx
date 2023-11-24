import React from 'react';
import { MIN_SCORE, PLAYER1, PLAYER2 } from '../../utils/constants';

function InitialPlayers({ playerScore }) {
  return (
    <div className='initialPlayers'>
         {playerScore[PLAYER1] === MIN_SCORE && <p className='player player1'></p>}
         {playerScore[PLAYER2] === MIN_SCORE && <p className='player player2'></p>}
    </div>
  )
}

export default InitialPlayers;