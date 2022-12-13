import React from 'react';
import './App.css';
import Navigation from './components/shared/Navigation';
import Home from './components/Home';
import Footer from './components/shared/Footer';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
