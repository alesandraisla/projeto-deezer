import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './Home/Home';
import { MoreMusic } from './pages/MoreMusic/MoreMusic'; // Importe o componente MoreMusic
import { Principal } from './pages/Principal/Principal';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/moreMusic" element={<MoreMusic />} /> {/* Rota para MoreMusic */}
      </Routes>
    </Router>
  );
}

export default App;
