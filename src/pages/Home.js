import React, { useEffect } from 'react';
import './Home.css';

import GameContextProvider from '../contexts/GameContext';
import Board from '../components/Board';
import Modal from '../Modal/Modal';
import { ModalProvider } from '../contexts/ModalContext';
import Header from '../components/header';
import Footer from '../components/footer';

export default function Home() { //Responsavel por carregar todos os outros componentes
  useEffect(() => {
    document.title = 'Ipag - Jogo da velha';
  }, []);

  return (
    <GameContextProvider>
      <ModalProvider>
        <Header/>
        <Board />
        <Modal/>
        <Footer/>
      </ModalProvider>
    </GameContextProvider>
  );
}
