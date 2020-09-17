import React, { useContext, useState } from 'react';

import { GameContext } from '../contexts/GameContext';
import api from '../api';

export default function Reset() { //function responsavel por resetar o game
  const { 
     setSquares,
     setIsXNext,
     setWhoIsWinner, 
     setHistory, 
     winner, 
     setWinner, 
     history, 
     squares } = useContext(GameContext);

  const iniciaGame = {  //objeto que inicia o game dentro do mongodb
    winner: "",
    history: [],
    squares: [],
  }

  const [game, setGame] = useState(iniciaGame);

  async function handleClick() {

    var data = { //define todos os campos como string Json
      winner: JSON.stringify(winner),
      history: JSON.stringify(history),
      squares: JSON.stringify(squares)
    };

  
   if((squares!==null) && (winner!=='')){  //verifica se há elementos e se o jogo terminou

      await api.post("/sistema/games", data,{ //faz a adiçao do game dentro do mongodb, passando pela api
        headers: {
          'Content-Type': 'application/json'
        
        }
      }).then(data=>{
        setGame({
          winner: data.winner,
          history: data.history,
          squares: data.squares
        });
      }).catch(e=>{
        console.log(e)
      });
   }

    setSquares(Array(9).fill(null)); //reseta o game
    setIsXNext(true); //define o jogador como sendo X
    setWhoIsWinner(''); //reseta o ganhador
    

    if(winner){
      setWinner(''); //reseta o ganhador do mongo
    }

    setHistory([]); //reseta o historico de jogadas
  }

  return (
    <>
    <p className="reset">
      <button type="button" onClick={handleClick}>
        Reset
      </button>
      
    </p>
    <br></br>
    </>
  );
}
