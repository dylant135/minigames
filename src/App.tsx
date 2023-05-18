import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home';
import Game from './pages/game/Game';
import NumberMemory from './games/numberMemory/NumberMemory';
import ReactionTest from './games/reactionTest/ReactionTest';
import PatternMemory from './games/patternMemory/PatternMemory';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/game' element={<Game />}>
          <Route path="/game/numbermemory" element={<NumberMemory />} />
          <Route path="/game/reactiontest" element={<ReactionTest />} />
          <Route path="/game/patternmemory" element={<PatternMemory />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
