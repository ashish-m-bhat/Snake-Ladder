import React, { useState } from 'react';
import { MAX_SCORE } from '../../utils/constants';

function Dice(props) {
    const {
        playerScore,
        setPlayerScore
    } = props;

    const [diceValue, setDiceValue] = useState(0);

    // When a dice is rolled, generate a random value and add to the player score
    const generateDiceValue = () => {
        let randomValue = 0;
        while(!randomValue) {
            randomValue = parseInt((Math.random() * 10) % 7);
        };
        setDiceValue(randomValue);

        const newScore = playerScore+randomValue;
        setPlayerScore(newScore);
        if (newScore >= MAX_SCORE) {
            setPlayerScore(0);
            setTimeout(() => {
                alert('You win!');
            }, 500);
        }
    };

  return (
    <div className='dice'>
        {!!diceValue && <p>{diceValue}</p>}
        <button onClick={generateDiceValue}>
            Roll
        </button>
    </div>
  )
}

export default Dice