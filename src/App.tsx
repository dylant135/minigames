import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home';
import Game from './pages/game/Game';
import NumberMemory from './games/numberMemory/NumberMemory';

function App() {
  return (
    <div className="App">
      <h1 className='center'>MiniGames</h1>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/game' element={<Game />}>
          <Route path="/game/numbermemory" element={<NumberMemory />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
