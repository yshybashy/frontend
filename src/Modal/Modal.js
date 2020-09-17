import React, { useEffect, useContext }from 'react';
import { Modal as ModalComponent } from 'antd';
import { useModalContext } from '../contexts/ModalContext';
import { GameContext } from '../contexts/GameContext';
import Api from '../api';
import './styles.css';

const Modal = () => { 
  const {
    modalState: { message, visible },
    closeModal,
  } = useModalContext();

  const { setHistory, setWinner, winner, setSquares, games, setGames } = useContext(GameContext);

  useEffect(() => { //responsavel por buscar informaçoes dentro do mongodb
    getItems();
    async function getItems() {
    const response = await Api.get('/sistema/games'); //busca todos os registros de jogos
     setGames(response.data)
     
    }
    
    
  }, []);
 
  async function handleClick(index) { //responsavel por setar os valores escolhidos no tabuleiro
      try{
        
        const response = await Api.get('/sistema/games'); //implementar buscar apenas um registro
        console.log(response.data[index].winner);
        const vencedor = response.data[index].winner
        setWinner(vencedor);
        const historia = response.data[index].history
        const square = response.data[index].squares
        const squareJson = JSON.parse(square);
        const historyJson = JSON.parse(historia);
        
        setHistory(historyJson)
       
        setSquares(squareJson)
      }catch(error){
        alert("Ocorreu um erro ao buscar os items");
      }
  }

  
  return (
    <>
    <ModalComponent
      onCancel={closeModal}
      onOk={closeModal}
      visible={visible}
    > 
      <h2>Jogos anteriores</h2>
      {games.map((data, index) => (
      <div key={index}>
        <input disabled className="indice" value={index}></input>
        <input disabled type="text" className="mostrar" value={ games[index].winner }></input> 
        <input type="button" className="botao" value="Carregar" onClick={() => handleClick(index) }></input>
      </div>
      ))} 
      
     
      
    </ModalComponent>
   
    </>
  );
};

export default Modal;