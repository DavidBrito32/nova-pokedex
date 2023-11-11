import styled from "styled-components";
import pikashu from "./assets/pikashu_correndo.webp";
import pokebola from "./assets/pokebola.gif";
import bola from "./assets/pokedex.svg";

const Loading = () => {
  return (
    <>
      <LoadingContainer>
        <div className="img">
          <img src={pokebola} alt="gif" />
          <img src={pikashu} alt="pokemon" />
        </div>
        <div className="loading">
          <div className="progress">
            <img src={bola} alt="pokebola" />
          </div>
        </div>
        <h1>Carregando . . .</h1>
      </LoadingContainer>
    </>
  );
};

const LoadingContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #00000066;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & .img {
    width: 50%;
    display: flex;
    justify-content: left;
    overflow: hidden;
    & img {
      position: relative;
      display: block;
      width: 240px;
      height: 240px;
      object-fit: contain;
      animation: carrera 400ms linear infinite;
      transition-duration: 400ms;
    }
  }

  & .loading {
    width: 50%;
    height: 40px;
    border: 5px solid green;
    background-color: white;
    border-radius: 8px;
    transition-duration: 400ms;
    overflow: hidden;
    & .progress {
      height: 100%;
      animation: progresso 400ms linear infinite;
      transition-duration: 400ms;
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
      background-color: red;
      display: flex;
      justify-content: right;
      align-items: center;
      padding-right: 5px;

      & img {
        display: block;
        width: 30px;
        height: 30px;
      }
    }
    & h1 {
      width: 30%;
      height: 100%;
      overflow: hidden;
      color: white;
      font-size: 1.5rem;
    }
  }

  @keyframes progresso {
    0% {
      width: 0%;
    }
    25% {
      width: 25%;
    }
    50% {
      width: 50%;
    }
    75% {
      width: 75%;
    }
    100% {
      width: 100%;
    }
  }
  @keyframes carrera {
    0% {
      left: -50%;
    }
    25% {
      left: 20%;
    }
    50% {
      left: 45%;
    }
    75% {
      left: 70%;
    }
    100% {
      left: 95%;
    }
  }

  @media only screen and (max-width: 768px) {
    & h1{
        font-size: 1.3rem;
    }

    & .img {
      width: 90%;
      & img {
        width: 100px;
        height: 100px;
      }
    }

    & .loading {
      width: 90%;
    }
  }
`;

export default Loading;
