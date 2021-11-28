import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { NavBar } from "./components/NavBar/NavBar";
import { HomeView } from "./components/HomeView/HomeView";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemCount } from "./components/ItemCount/ItemCount";
import { ItemDetailContainer } from "./components/ItemDetailContainer.js/ItemDetailContainer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CartView } from "./components/CartView/CartView";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/detail/:itemId" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<CartView />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
