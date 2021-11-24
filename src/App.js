import "./App.css";

import { NavBar } from "./components/NavBar/NavBar";
import { HomeView } from "./components/HomeView/HomeView";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer greeting="buenos dias" />
      <HomeView saludo="Hola mundo3" />
    </div>
  );
}

export default App;
