/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { styled } from "styled-components";
import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import bg from "./assets/bg.svg";
import { Link, useLocation } from "react-router-dom";
import { useAxios } from "../../hooks/useAxios";
import { PokeStatsContext } from "../../context/Pokemon_states";
import {
  convertIdImage,
  defineColorCard,
  defineColorType,
} from "../../services/SuportFunctions";

import { defineImageType } from "../../services/typesImages";

const CardPokemon = ({ pokemon }) => {
  const locate = useLocation();
  const { data } = useAxios(pokemon.url);

  const { addPokemon, removePokemon, openDetails, pokedex } =
    useContext(PokeStatsContext);

  const [pokeInfos, setPokeInfos] = useState({
    name: "",
    id: "",
    tipo1: "",
    tipo2: "",
    image: "",
  });

  useEffect(() => {
    setPokeInfos({
      name: data.name,
      id: data.id,
      tipo1: data.types && data.types[0] && data.types[0].type.name,
      tipo2: data.types && data.types[1] && data.types[1].type.name,
    });
  }, [data]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <ContainerCard
          $bg={defineColorCard(pokeInfos.tipo1)}
          $tipo1={defineColorType(pokeInfos.tipo1)}
          $tipo2={defineColorType(pokeInfos.tipo2)}
        >
          <div className="card">
            <img className={"bg-card"} src={bg} alt="pokebola" />
            <img
              className={"pokemon"}
              src={`https://www.serebii.net/swordshield/pokemon/${convertIdImage(
                pokeInfos.id
              )}.png`}
              alt="pokemon"
            />

            <h3>#{convertIdImage(pokeInfos.id)}</h3>
            <h2>{pokeInfos.name}</h2>
            <div className="types">
              <span className="tipo1">
                <img
                  src={defineImageType(pokeInfos.tipo1)}
                  alt="tipo do pokemon"
                />
                {pokeInfos.tipo1}
              </span>

              {pokeInfos.tipo2 && (
                <span className="tipo2">
                  <img
                    src={defineImageType(pokeInfos.tipo2)}
                    alt="tipo do pokemon"
                  />
                  {pokeInfos.tipo2}
                </span>
              )}
            </div>
            <h4>
              <Link
                to={`/pokemon/${pokemon.name}`}
                onClick={() => openDetails(pokemon)}
              >
                detalhes
              </Link>
              {locate.pathname === "/" && (
                <button onClick={() => addPokemon(pokemon)}>Capturar!</button>
              )}
              {locate.pathname === "/pokedex" && (
                <button
                  className="excluir"
                  onClick={() => removePokemon(pokemon)}
                >
                  Excluir
                </button>
              )}
            </h4>
          </div>
        </ContainerCard>
      </motion.div>
    </>
  );
};

const ContainerCard = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: end;

  & .card {
    height: 210px;
    border-radius: 12px;
    position: relative;
    padding: 25px 0 13px 23px;
    transition-duration: 400ms;
    background-color: ${(props) => props.$bg || "#336633"};

    & h3 {
      font-size: 16px;
      color: white;
      font-weight: 700;
      line-height: 20px;
    }

    & h2 {
      font-size: 32px;
      font-weight: 700;
      line-height: 39px;
      text-align: left;
      color: white;
      margin-bottom: 10px;
      text-transform: capitalize;
    }

    & .types {
      width: 100%;
      display: flex;
      gap: 7px;
      align-items: center;
      margin-bottom: 19px;
      & span {
        padding: 5px 8px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white;
        gap: 17px;
        border: 2px dashed white;
        border-radius: 8px;

        &.tipo1 {
          background-color: ${(props) => props.$tipo1 || "#010101"};
        }
        &.tipo2 {
          background-color: ${(props) => props.$tipo2 || "#010101"};
        }

        & img {
          display: block;
          width: 17px;
          height: 19px;
          object-fit: contain;
        }
      }
    }

    & h4 {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-right: 22px;
      position: relative;
      z-index: 3;

      & a {
        color: white;
        font-size: 16px;
        font-weight: 700;
        line-height: 24px;
        text-align: left;
        text-decoration: underline;
      }
      & button {
        padding: 7px 34px;
        border-radius: 8px;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        border: none;
        cursor: pointer;
        background-color: #ffffff;
        color: black;
        transition-duration: 400ms;
        &.excluir {
          background-color: #ff6262;
          color: white;
          &:hover {
            background-color: #c44141;
          }
        }

        &:active {
          scale: 0.97;
        }
      }
    }

    & .bg-card {
      position: absolute;
      top: -25px;
      right: -25px;
      width: 225px;
      height: 225px;
    }

    & .pokemon {
      position: absolute;
      top: -55px;
      right: 0px;
      width: 193px;
      height: 193px;
    }

    @media only screen and (max-width: 480px) {
      padding: 25px 0 13px 15px;
      & h3 {
        font-size: 14px;
      }
      & h2 {
        font-size: 26px;
      }
    }
  }
`;

export default CardPokemon;
