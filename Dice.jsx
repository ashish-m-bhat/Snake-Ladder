import React, { useState } from 'react';
import { MAX_SCORE, PLAYER1, PLAYER2 } from '../../utils/constants';

function Dice(props) {
    const {
        playerScore,
        setPlayerScore,
        currentPlayer,
        setCurrentPlayer,
    } = props;

    const [diceValue, setDiceValue] = useState(0);

    // When a dice is rolled, generate a random value and add to the player score
    const generateDiceValue = () => {
        const currentPlayerScore = playerScore[currentPlayer];
        let randomValue = 0;
        while(!randomValue) {
            randomValue = parseInt((Math.random() * 10) % 7);
        };
        setDiceValue(randomValue);

        const newScoreOfCurrentPlayer = currentPlayerScore+randomValue;

        setPlayerScore(val => ({
            ...val,
            [currentPlayer]: newScoreOfCurrentPlayer
        }));
        setCurrentPlayer(val => +!val);

        if (newScoreOfCurrentPlayer >= MAX_SCORE) {
            setPlayerScore({
                [PLAYER1]: 0,
                [PLAYER2]: 0
            });
            setTimeout(() => {
                alert(` Player ${currentPlayer+1} wins!`);
                location.reload()
            }, 500);
        }
    };

  return (
    <div className='dice'>
        {!!diceValue && <p className='value'>{diceValue}</p>}
        <button onClick={generateDiceValue}>
            <img src="https://play-lh.googleusercontent.com/WHS_1xzDH8Eup1ukJPSRRQOMPMwG0hZWwHxomiXNYH_oGa72LniTPA8djUJuUoGQBTI"/>
        </button>
    </div>
  )
}

export default Dice