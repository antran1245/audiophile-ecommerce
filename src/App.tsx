import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/shared/Navigation";
import Home from "./components/Home";
import Category from "./components/Category";
import Footer from "./components/shared/Footer";
import "./App.css";
import DataContext from "./components/context/DataContext";

function App() {
  return (
    <DataContext>
      <BrowserRouter>
        <div className="relative">
          <Navigation />
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="/Category/:type" element={<Category />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </DataContext>
  );
}

export default App;
