import Router from "./routes/Router"
import { PokeStatsProvider } from "./context/Pokemon_states";
import { HashRouter } from "react-router-dom";


const App = () => {

  return (
    <>  
      <PokeStatsProvider>
        <HashRouter>
          <Router />
        </HashRouter>
      </PokeStatsProvider>

    </>
  )
}

export default App
