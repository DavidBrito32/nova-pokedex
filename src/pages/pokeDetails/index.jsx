import styled from "styled-components";
import bg from "./assets/bg.svg";
import { useContext } from "react";
import { PokeStatsContext } from "../../context/Pokemon_states";
import { useParams } from "react-router-dom";
import { useAxios } from "../../hooks/useAxios";
import { defineImageType } from "../../services/typesImages";
import {
  defineColorCard,
  defineColorType,
  strongCalc,
  powerFullProgress,
} from "../../services/SuportFunctions";
import Loading from "../../components/Loading";

import { motion } from "framer-motion";

const PokeDetails = () => {
  const { name } = useParams();
  const { details } = useContext(PokeStatsContext);
  const { data, loading, error } = useAxios(details.url);

  let pontos = [];
  data &&
    data.stats &&
    data.stats.map((item) => (pontos = [...pontos, item.base_stat]));
  const pontosTotais = pontos.reduce(
    (acumulador, atual) => acumulador + atual,
    0
  );

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
      <ContainerDetails
        $bg={defineColorCard(
          data.types && data.types[0] && data.types[0].type.name
        )}
        $tipo1={defineColorType(
          data.types && data.types[0] && data.types[0].type.name
        )}
        $tipo2={defineColorType(
          data.types && data.types[1] && data.types[1].type.name
        )}
      >
        <h1>Detalhes</h1>
        {loading && <Loading />}
        {error && (
          <h1>
            Ocorreu um Erro ao Recarregar as Informações <span>{error}</span>
          </h1>
        )}
        <div className="infos">
          <img className={"bg-details"} src={bg} alt="pokebola" />
          {data &&
            data.sprites &&
            data.sprites.other.dream_world.front_default && (
              <img
                className={"details-pokemon"}
                src={data.sprites.other.dream_world.front_default}
                alt="pokemon"
              />
            )}
          <div className="sprites">
            <div className="sprite">
              {data && data.sprites && data.sprites.versions && (
                <img
                  src={
                    data.sprites.versions["generation-v"]["black-white"]
                      .animated.front_default
                  }
                  alt="imagem"
                />
              )}
            </div>
            <div className="sprite">
              {data && data.sprites && data.sprites.versions && (
                <img
                  src={
                    data.sprites.versions["generation-v"]["black-white"]
                      .animated.back_default
                  }
                  alt="imagem"
                />
              )}
            </div>
          </div>

          <div className="base_status">
            <h3>Base stats</h3>
            <ul>
              {data &&
                data.stats &&
                data.stats.map((item, i) => (
                  <Li key={i} $nivel={item.base_stat}>
                    <h4>{item.stat.name}</h4> <span>{item.base_stat}</span>
                    <div className="progresso">
                      <div className="largura"></div>
                    </div>
                  </Li>
                ))}
              <Li $pontos={pontosTotais && pontosTotais}>
                <h4>Total</h4>
                <span>{pontosTotais}</span>
                <div className="progresso">
                  <div className="largura total"></div>
                </div>
              </Li>
            </ul>
          </div>

          <div className="detalhes">
            <h3>{"#001"}</h3>
            <h1>{name}</h1>
            <div className="types-details">
              <span className="tipo1">
                <img
                  src={defineImageType(
                    data.types && data.types[0] && data.types[0].type.name
                  )}
                  alt="tipo do pokemon"
                />
                {data.types && data.types[0] && data.types[0].type.name}
              </span>
              {data && data.types && data.types.length > 1 && (
                <span className="tipo2">
                  <img
                    src={defineImageType(
                      data.types && data.types[1] && data.types[1].type.name
                    )}
                    alt="tipo do pokemon"
                  />
                  {data.types && data.types[1] && data.types[1].type.name}
                </span>
              )}
            </div>
            <ul>
              <h2>Moves:</h2>
              {data &&
                data.moves &&
                data.moves.map((item, i) => <li key={i}>{item.move.name}</li>)}
            </ul>
          </div>
        </div>
      </ContainerDetails>
      </motion.div>
    </>
  );
};

const ContainerDetails = styled.div`
  width: 100%;
  background-color: #333;
  padding: 30px 40px 0;
  min-height: calc(100vh - 160px);
  display: flex;
  flex-direction: column;
  gap: 2px;
  overflow: hidden;

  & h1 {
    font-size: 48px;
    font-weight: 700;
    color: #ffffff;
  }

  & .infos {
    padding: 24px 46px 26px;
    border: 2px solid white;
    border-radius: 37px;
    display: flex;
    position: relative;
    background-color: ${(props) => props.$bg || "#456566"};

    & .bg-details {
      position: absolute;
      right: -180px;
      top: -100px;
      width: 1000px;
      height: 130%;
    }
    & .details-pokemon {
      position: absolute;
      right: 55px;
      top: -90px;
      width: 220px;
      height: 220px;
    }
    & .sprites {
      width: 285px;
      display: flex;
      flex-direction: column;
      gap: 47px;
      & .sprite {
        width: 282px;
        height: 280px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
        background-color: white;

        & img {
          display: block;
          width: 180px;
          height: 180px;
        }
      }
    }
    & .base_status {
      padding: 19px 18px;
      width: 345px;
      margin-left: 34px;
      background-color: white;
      border-radius: 8px;
      & h3 {
        font-size: 24px;
        margin-bottom: 20px;
      }

      & ul {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 5px;
      }
    }
    & .detalhes {
      width: 300px;
      margin-left: 68px;
      z-index: 3;

      & h3 {
        color: white;
        font-size: 16px;
        font-weight: 700;
        line-height: 20px;
      }
      & h1 {
        font-size: 48px;
        color: white;
        font-weight: 700;
        line-height: 58px;
        letter-spacing: 0em;
        text-align: left;
      }

      & .types-details {
        width: 100%;
        display: flex;
        gap: 7px;
        align-items: center;
        margin: 10px 0 45px;
        & span {
          padding: 5px 8px;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 17px;
          border: 2px dashed white;
          border-radius: 8px;
          color: white;

          &.tipo1 {
            background-color: ${(props) => props.$tipo1 || "#334433"};
          }
          &.tipo2 {
            background-color: ${(props) => props.$tipo2 || "#334433"};
          }

          & img {
            display: block;
            width: 17px;
            height: 19px;
            object-fit: contain;
          }
        }
      }

      & ul {
        width: 100%;
        height: 453px;
        overflow-y: auto;
        overflow-x: hidden;
        display: flex;
        flex-direction: column;
        gap: 20px;
        background-color: white;
        border-radius: 8px;
        padding: 18px;

        & li {
          width: fit-content;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #ececec;
          padding: 5px 8px;
          border: 2px dashed gray;
          border-radius: 8px;
        }
      }
    }
  }

  @media only screen and (max-width: 480px) {
    padding: 30px 5px 0;

    & h1 {
      font-size: 28px;
    }

    & .infos {
      margin-top: 30px;
      flex-direction: column-reverse;
      padding: 20px 10px 0;
      gap: 20px;
      & .bg-details {
        display: none;
      }
      & .details-pokemon {
        width: 150px;
        height: 150px;
        top: -90px;
        right: 0px;
      }

      & .detalhes {
        width: 100%;
        margin: 0;
        & h3 {
          font-size: 16px;
        }

        & h1 {
          font-size: 2rem;
        }

        & ul {
          height: 300px;
        }
      }

      & .base_status {
        margin: 0;
        width: 100%;
      }

      & .sprites {
        width: 100%;
        gap: 20px;
        align-items: center;
      }
    }
  }

  @media only screen and (min-width: 480px) and (max-width: 768px) {
    padding: 30px 0px 0;
    & h1 {
      font-size: 28px;
      padding-left: 30px;
    }
    & .infos {
      margin-top: 30px;
      flex-direction: column-reverse;
      padding: 20px 10px 0;
      gap: 20px;
      & .bg-details {
        display: none;
      }
      & .details-pokemon {
        width: 180px;
        height: 180px;
        top: -100px;
        right: 0px;
      }

      & .detalhes {
        width: 100%;
        margin: 0;
        & h3 {
          font-size: 16px;
        }

        & h1 {
          font-size: 2rem;
        }

        & ul {
          height: 300px;
        }
      }

      & .base_status {
        margin: 0;
        width: 100%;
      }

      & .sprites {
        width: 100%;
        gap: 20px;
        flex-direction: row;
        justify-content: center;
        margin-bottom: 20px;
      }
    }
  }

  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    padding: 30px 10px 0;
    & .infos {
      justify-content: space-between;

      & .details-pokemon {
        right: 0px;
        top: -100px;
        width: 180px;
        height: 180px;
      }
      & .sprites {
        width: 200px;
        margin: 0;
      }
      & .base_status {
        margin: 0;
        padding: 5px 5px;
        width: 250px;
      }
      & .detalhes {
        width: 250px;
        margin: 0;
        z-index: 3;
        & h1 {
          font-size: 32px;
        }
      }
    }
  }
`;

const Li = styled.li`
  height: 35px;
  display: flex;
  align-items: center;
  font-size: 16px;
  border-bottom: 1px solid #c6c6c5cc;
  gap: 20px;

  & h4 {
    width: 110px;
    font-size: 12px;
    text-align: right;
  }

  & .progresso {
    flex: 1;
    height: 90%;
    border: 1px solid black;
    border-radius: 8px;
    transition-duration: 400ms;
    transition-delay: 3s;
    overflow: hidden;

    & .largura {
      width: calc(1 * ${(props) => Math.min(props.$nivel, 100) || 0}%);
      height: 100%;
      transition-duration: 400ms;
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
      background-color: ${(props) => strongCalc(props.$nivel) || "#572f2f"};

      &.total {
        width: calc(${(props) => props.$pontos / 10 + "%" || "50%"});
        background-color: ${(props) => powerFullProgress(props.$pontos)};
      }
    }
  }
`;

export default PokeDetails;
