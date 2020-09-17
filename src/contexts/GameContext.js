import React, { createContext, useState } from 'react';
import t from 'prop-types';

export const GameContext = createContext(); //responsavel pelos estados globais

export default function GameContextProvider({ children }) {
  const [squares, setSquares] = useState(Array(9).fill(null)); //estado do tabuleiro
  const [isXNext, setIsXNext] = useState(true); //estado do jogador atual
  const [whoIsWinner, setWhoIsWinner] = useState(''); //estado do ganhador do jogo atual
  const [history, setHistory] = useState([]);//estado das jogadas anteriores
  const [winner, setWinner] = useState('');//estado do ganhador que recupera do mongodb
  const [games, setGames] = useState([{}]);//estado do jogo recuperado do mongodb
  const [showButton, setShowButton] = useState('hide'); //estado que mostra e esconde o botao de historico

  

  const state = {
    squares,
    setSquares,
    isXNext,
    setIsXNext,
    whoIsWinner,
    setWhoIsWinner,
    history,
    setHistory,
    winner,
    setWinner,
    games, 
    setGames,
    showButton, 
    setShowButton,
  };

  return <GameContext.Provider value={state}>{children}</GameContext.Provider>;
}

GameContextProvider.propTypes = {
  children: t.node.isRequired,
};
