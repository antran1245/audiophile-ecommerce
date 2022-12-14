import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  HashRouter,
  Navigate,
} from "react-router-dom";
import Navigation from "./components/shared/Navigation";
import Home from "./components/Home";
import Category from "./components/Category";
import Footer from "./components/shared/Footer";
import DataContext from "./components/context/DataContext";
import Detail from "./components/Detail";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import "./App.css";

function App() {
  const [openCart, setOpenCart] = useState<boolean>(false);
  return (
    <DataContext>
      <HashRouter basename="/">
        <div className="relative">
          <Navigation openCart={openCart} setOpenCart={setOpenCart} />
          {openCart ? <Cart setOpenCart={setOpenCart} /> : null}
          <Routes>
            <Route path="/audiophile-ecommerce/" element={<Home />} />
            <Route path="/Category/:type/" element={<Category />} />
            <Route path="/Category/:type/detail/:id" element={<Detail />} />
            <Route
              path="/checkout"
              element={<Checkout setOpenCart={setOpenCart} />}
            />
            <Route
              path="*"
              element={<Navigate to="/audiophile-ecommerce/" replace />}
            />
          </Routes>
          <Footer />
        </div>
      </HashRouter>
    </DataContext>
  );
}

export default App;
