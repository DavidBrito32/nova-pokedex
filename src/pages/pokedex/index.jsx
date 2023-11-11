import styled from "styled-components";
import CardPokemon from "../../components/CardPokemon";
import { useContext } from "react";
import { PokeStatsContext } from "../../context/Pokemon_states";
import { motion } from "framer-motion";
import Modal from "../../components/Modal";

const PokedexPage = () => {
  const { pokedex, modal, mensagem, mudaModal } = useContext(PokeStatsContext);
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {modal && mensagem === 2 && (
          <Modal mensagem={2} fecharModal={mudaModal} />
        )}
        <ContainerPokedex>
          <h1>Meus Pokemons</h1>
          <ul>
            {pokedex &&
              pokedex.map((item) => (
                <li key={item.name}>
                  <CardPokemon pokemon={item} />
                </li>
              ))}
          </ul>
        </ContainerPokedex>
      </motion.div>
    </>
  );
};

const ContainerPokedex = styled.main`
  background-color: #333;
  padding: 60px 40px 0;
  min-height: calc(100vh - 160px);
  display: flex;
  flex-direction: column;
  gap: 2px;

  & h1 {
    font-size: 48px;
    font-weight: 700;
    color: #ffff;
  }

  & ul {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    transition-duration: 400ms;
    overflow: hidden;

    & li {
      width: 440px;
      height: 263px;
      transition-duration: 400ms;
    }
  }

  @media only screen and (max-width: 480px) {
    padding: 30px 5px 0;

    & h1 {
      font-size: 28px;
    }

    & ul {
      & li {
        width: 95%;
      }
    }
  }

  @media only screen and (min-width: 480px) and (max-width: 768px) {
    padding: 30px 0px 0;
    & h1 {
      font-size: 28px;
      padding-left: 30px;
    }
  }
`;
export default PokedexPage;
