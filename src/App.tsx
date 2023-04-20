import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home';

function App() {
  return (
    <div className="App">
      <h1 className='center'>MiniGames</h1>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
