import { MAX_SCORE } from "./constants";

const setSnakes = (list) => {
    const snakeMapping = new Map([
        [22, 18],
        [49, 30],
        [97, 39]
    ]);
    list.forEach((tile) => {
        if (Array.from(snakeMapping.keys()).includes(tile.value)) {
            tile.snake = {
                start: true,
                end: snakeMapping.get(tile.value)
            }
        }
    });
};

const setLadders = (list) => {
    const ladderMapping = new Map([
        [9, 27],
        [16, 47],
        [55, 85]
    ]);
    list.forEach((tile) => {
        if (Array.from(ladderMapping.keys()).includes(tile.value)) {
            tile.ladder = {
                start: true,
                end: ladderMapping.get(tile.value)
            }
        }
    });
};

export const getTiles = () => {
    const initList = Array(MAX_SCORE).fill(0).map((_, index) => ({
        value: index + 1,
        snake: { start: null, end: null },
        ladder: { start: null, end: null },
    }));

    // Prep
    setSnakes(initList);
    setLadders(initList);

    const finalList = [];
    let i=0;
    let turn = 1;
    while (i<= initList.length) {
        if (turn % 2 !== 0) {
            finalList.push(...initList.slice(i, i+10).reverse());
        } else {
            finalList.push(...initList.slice(i, i+10));
        }
        turn++;
        i+=10;
    }
    return finalList.reverse();
};
