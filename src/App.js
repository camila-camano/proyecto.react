import "./App.css";

import { NavBar } from "./components/NavBar/NavBar";
import { HomeView } from "./components/HomeView/HomeView";
import { Container } from "./components/Container/Container";

function App() {
  return (
    <div className="App">
      <NavBar />
      <HomeView saludo="Hola mundo3" />
    </div>
  );
}

export default App;
