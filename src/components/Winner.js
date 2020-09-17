import React, { useContext } from 'react';
import { GameContext } from '../contexts/GameContext';

export default function Winner() {
  const { whoIsWinner, squares, setWinner, winner } = useContext(GameContext);

  
   if (!whoIsWinner && (squares[0]!==null //Verifica se o jogo terminou empatado
    && squares[1]!==null 
    && squares[2]!==null
    && squares[3]!==null
    && squares[4]!==null
    && squares[5]!==null
    && squares[6]!==null
    && squares[7]!==null
    && squares[8]!==null)) { 

      setWinner("Empatou")
  
      return <><h1>Empatou</h1></>;
   }else if(whoIsWinner){
     setWinner(whoIsWinner + " Ganhou!!")

    return <p className="winner">{whoIsWinner} ganhou!!!</p>;
   }

   return <></>
  
  
}