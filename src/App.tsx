import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './components/shared/Navigation';
import Home from './components/Home';
import Headphones from './components/Headphones';
import Footer from './components/shared/Footer';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='/headphone' element={<Headphones/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
