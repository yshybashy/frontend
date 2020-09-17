import React, { useContext } from 'react';
import t from 'prop-types';

import { GameContext } from '../contexts/GameContext';

export default function Square({ value, index }) { //Responsavel pelas celulas do jogo (quadradinhos)
  const {
    squares,
    setSquares,
    isXNext,
    setIsXNext,
    whoIsWinner,
    history,
    setHistory,
  } = useContext(GameContext);

  function handleClick() {
    if (squares[index]) return;
    if (whoIsWinner) return;

    const newSquares = [...squares];
    newSquares[index] = isXNext ? 'X' : 'O'; //verifica qual foi o ultimo jogador
    setSquares(newSquares);
    setIsXNext(!isXNext);

    setHistory([ //seta as jogadas dentro do array de jogadas anteriores
      ...history,
      {
        squares: [...squares],
        isXNext,
        whoIsWinner,
      },
    ]);
  }

  return (
    <button type="button" onClick={handleClick}>
      {value}
    </button>
  );
}

Square.defaultProps = {
  value: null,
};

Square.propTypes = {
  value: t.string,
  index: t.number.isRequired,
};
