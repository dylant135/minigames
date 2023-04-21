import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home';
import Game from './pages/game/Game';

function App() {
  const [gamesList, setGamesList] = useState<string[]>(['numberMemory'])
  return (
    <div className="App">
      <h1 className='center'>MiniGames</h1>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home gamesList={gamesList} />} />
        <Route path='/game' element={<Game />} />
      </Routes>
    </div>
  );
}

export default App;
