/* eslint-disable no-unused-vars */
import { styled } from "styled-components";
import Logo from "./assets/logo.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";
import { goToHome, goToPokedex } from "../../routes/Cordinators";
import { useContext } from "react";
import { PokeStatsContext } from "../../context/Pokemon_states";

const Header = () => {
  const { pokedex, details, addPokemon, removePokemon } =
    useContext(PokeStatsContext);
  const location = useLocation();
  const navigate = useNavigate();
  const btn = pokedex.find((item) => item.name === details.name);

  return (
    <>
      <HeaderContainer>
        <div className="botao">
          {location.pathname === "/pokedex" && (
            <h3 onClick={() => goToHome(navigate)}>
              <FiChevronLeft /> Todos os Pokémons
            </h3>
          )}
          {location.pathname.includes("/pokemon") && (
            <h3 onClick={() => goToHome(navigate)}>
              <FiChevronLeft /> Todos os Pokémons
            </h3>
          )}
        </div>

        <div className="logo">
          <img src={Logo} alt="Logo Pokedex" />
        </div>

        <div className="botao">
          {location.pathname === "/" && (
            <button onClick={() => goToPokedex(navigate)}>pokedex</button>
          )}
          {location.pathname.includes("/pokemon") && btn !== undefined && (
            <button className="excluir" onClick={() => removePokemon(details)}>
              Excluir
            </button>
          )}
          {location.pathname.includes("/pokemon") && btn === undefined && (
            <button onClick={() => addPokemon(details)}>Adicionar</button>
          )}
        </div>
      </HeaderContainer>
    </>
  );
};

const HeaderContainer = styled.header`
  height: 160px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  padding: 0 40px 0 74px;
  transition-duration: 400ms;
  z-index: 10;

  & .botao {
    transition-duration: 400ms;
    & h3 {
      font-weight: 700;
      font-size: 24px;
      text-decoration: underline;
      color: black;
      display: flex;
      align-items: center;
      cursor: pointer;
      transition-duration: 400ms;
    }

    & button {
      font-size: 24px;
      font-weight: normal;
      line-height: 36px;
      padding: 20px 90px;
      border: none;
      border-radius: 8px;
      background-color: #33a4f5;
      color: white;
      cursor: pointer;
      transition-duration: 400ms;
      &.excluir {
        background-color: #ff6262;
        &:hover {
          background-color: #9c4a4a;
        }
      }

      &:hover {
        background-color: #248cd6;
      }

      &.del {
        background-color: #ff6262;
        color: white;
        font-weight: 400;

        &:hover {
          background-color: #e64949;
        }
      }

      &:active {
        scale: 0.97;
      }
    }
  }

  & img {
    width: 308px;
    height: 113px;
    object-fit: contain;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media only screen and (max-width: 480px) {
    padding: 0 5px;
    height: 100px;
    border: 1px solid black;
    & img {
      width: 35%;
    }

    & .botao {
      & h3 {
        width: 100px;
        font-size: 14px;
      }

      & button {
        font-size: 14px;
        padding: 5px 15px;
      }
    }
  }

  @media only screen and (min-width: 480px) and (max-width: 768px) {
    padding: 20px 10px;
    & img {
      width: 35%;
    }

    & .botao {
      & h3 {
        width: 220px;
        font-size: 1.3rem;
      }

      & button {
        padding: 10px 25px;
        font-size: 16px;
      }
    }
  }
`;

export default Header;
