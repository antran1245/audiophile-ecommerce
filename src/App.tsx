import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/shared/Navigation";
import Home from "./components/Home";
import Category from "./components/Category";
import Footer from "./components/shared/Footer";
import "./App.css";
import DataContext from "./components/context/DataContext";
import Detail from "./components/Detail";

function App() {
  return (
    <DataContext>
      <BrowserRouter>
        <div className="relative">
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Category/:type/" element={<Category />} />
            <Route path="/Category/:type/detail/:id" element={<Detail />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </DataContext>
  );
}

export default App;
