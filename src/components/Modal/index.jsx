/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import styled from "styled-components";

const Modal = ({ mensagem, fecharModal }) => {
  return (
    <>
      <ModalContainer onClick={fecharModal}>
        <div className="mensagem">
          {mensagem === 1 && (
            <>
              <h1>Gotcha!</h1>
              <p>O Pokémon foi adicionado a sua Pokédex</p>
            </>
          )}
          {mensagem === 2 && (
            <>
              <h1>Oh, no!!</h1>
              <p>O Pokémon foi removido da sua Pokedéx</p>
            </>
          )}
        </div>
      </ModalContainer>
    </>
  );
};

const ModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: #00000088;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  top: 0;

  & .mensagem {
    width: 450px;
    height: 225px;
    border-radius: 8px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & h1 {
      font-size: 48px;
      font-weight: 700;
      line-height: 72px;
    }
    & p {
      font-size: 16px;
      font-weight: 700;
      line-height: 24px;
    }
  }

  @media only screen and (max-width: 480px) {
    & .mensagem {
      width: 90%;
      height: 200px;

      & h1 {
        font-size: 28px;
      }

      & p {
        font-size: 12px;
      }
    }
  }
`;

export default Modal;
