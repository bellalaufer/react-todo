import { useReducer } from "react";
import { globalContext as GlobalContext } from "./contexts/globalContext";
import { reducer } from "./reducers/reducer";

import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";


function App() {

  const initialState = {
    tasks: [],
    text: ""
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  

  return (
    <>
    <GlobalContext.Provider value={{state, dispatch}}>
      <Header />
      <Main />
      <Footer />
    </GlobalContext.Provider>
    </>
  );
}

export default App;
