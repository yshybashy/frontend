import React, { createContext, useContext, useState } from 'react';

const ModalContext = createContext({});

const ModalProvider = ({ children }) => { //Responsavel pelo Modal de jogos anteriores
  const [modalState, setState] = useState({ visible: false });

  const openModal = (payload) =>
    setState({ ...payload, visible: true });
  const closeModal = () => setState({ visible: false });

  return (
    <ModalContext.Provider
      value={{ setState, modalState, openModal, closeModal }}
    >
      {children}
    </ModalContext.Provider>
  );
};

const useModalContext = () => {
  const context = useContext(ModalContext);
  return context;
};

export {ModalContext, useModalContext, ModalProvider };