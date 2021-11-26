import "./App.css";

import { NavBar } from "./components/NavBar/NavBar";
import { HomeView } from "./components/HomeView/HomeView";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemCount } from "./components/ItemCount/ItemCount";

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer />
      <HomeView />
      <ItemCount />
    </div>
  );
}

export default App;
