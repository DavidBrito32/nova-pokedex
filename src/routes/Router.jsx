import { Routes, Route, useLocation } from "react-router-dom";
import LayoutPage from "../layouts";
import HomePage from "../pages/home";
import PokedexPage from "../pages/pokedex";
import ErrorPage from "../pages/error";
import PokeDetails from "../pages/pokeDetails";
import { AnimatePresence } from "framer-motion";

const Router = () => {
  const location = useLocation();

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<LayoutPage />}>
            <Route index element={<HomePage />} />
            <Route path="/pokedex" element={<PokedexPage />} />
            <Route path="/pokemon/:name" element={<PokeDetails />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default Router;
