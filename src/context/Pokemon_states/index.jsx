/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { useAxios } from "../../hooks/useAxios";
import { BASE_URL } from "../../constants/BASE_URL";
export const PokeStatsContext = createContext();

export const PokeStatsProvider = ({ children }) => {
  const { data: pokeLista, error, loading } = useAxios(BASE_URL);
  const [details, setDetais] = useState(
    JSON.parse(localStorage.getItem("details")) || {}
  );
  const [pokedex, setPokedex] = useState(
    JSON.parse(localStorage.getItem("pokedex")) || []
  );
  /* MODAL */
  const [modal, setModal] = useState(false);
  const mudaModal = () => setModal(!modal);
  const [mensagem, setMensagem] = useState("");
/* ------------------------------------------------------ */

  useEffect(() => {
    if (pokedex.length > 0) {
      localStorage.setItem("pokedex", JSON.stringify(pokedex));
    }
  }, [pokedex]);
  const addPokemon = (pokemon) => {
    const poke = pokedex.find((item) => item.name === pokemon.name);
    mudaModal();
    setMensagem(1);
    if (poke === undefined) {
      setPokedex([...pokedex, pokemon]);
    }
  };
  const openDetails = (pokemon) => {
    setDetais(pokemon);
    localStorage.setItem("details", JSON.stringify(pokemon));
  };
  const removePokemon = (pokemon) => {
    mudaModal();
    setMensagem(2);
    const newPokemon = pokedex.filter((item) => item.name !== pokemon.name);
    setPokedex(newPokemon);
    localStorage.setItem("pokedex", JSON.stringify(newPokemon));
  };
  return (
    <>
      <PokeStatsContext.Provider
        value={{
          pokeLista,
          pokedex,
          addPokemon,
          removePokemon,
          loading,
          error,
          details,
          setDetais,
          openDetails,
          mudaModal,
          modal,
          mensagem,
          setMensagem
        }}
      >
        {children}
      </PokeStatsContext.Provider>
    </>
  );
};