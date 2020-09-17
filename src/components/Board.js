import React, { useContext, useEffect } from 'react';
import uuid from 'uuid/v4';
//import { Button } from 'antd';

import { GameContext } from '../contexts/GameContext';
import calculateWinner from '../utils/calculateWinner';

import Square from './Square';
import Player from './Player';
import Reset from './Reset';
import Winner from './Winner';
import History from './History';
import { useModalContext } from '../contexts/ModalContext';
import Api from '../api';

export default function Board() { //Function do tabuleiro

  const { openModal } = useModalContext(); //inicia modal
  const testModal = () => openModal({ message: 'Jogos anteriores' }); //seta msg no modal
  const { squares, setWhoIsWinner, history, games, showButton, setShowButton, setGames } = useContext(GameContext); //chamada aos estados globais

  useEffect(() => { //hook que executa antes de todos os componentes
    const winner = calculateWinner(squares); //calcula vencedor

    if (winner) {
      setWhoIsWinner(winner); //seta vencedor
    }

    if(games){
      setShowButton('')
    }
   async function getItems() {
    const response = await Api.get('/sistema/games'); //busca todos os registros de jogos
    setGames(response.data)
    }
    getItems();

  }, [history, setWhoIsWinner, squares]);

  return (
    <div className="board-container">
      <Player />
      <Winner />
      <Reset />         
      <div className="board">
        {squares.map((value, index) => (
          <Square value={value} index={index} key={uuid()} />
        ))}
      </div >
      <div className="div-button">
        <button className="board-button" onClick={testModal} type="primary" hidden={ showButton } >
          Histórico
        </button>
      </div>      
      <History/>
    </div>
  );
}
