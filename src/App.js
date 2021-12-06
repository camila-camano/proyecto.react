import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { NavBar } from "./components/NavBar/NavBar";

import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";

import { ItemDetailContainer } from "./components/ItemDetailContainer.js/ItemDetailContainer";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CartView } from "./components/CartView/CartView";
import { CartProvider } from "./context/CartContext";
import { Checkout } from "./components/Checkout/Checkout";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/detail/:itemId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartView />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
