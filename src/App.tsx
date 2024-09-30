// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import BeerDetails from './pages/BeerDetails';
import Management from './pages/Management';
import Purchases from './pages/Purchases';
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <Router>
      <Header /> 
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/beers/:id" element={<BeerDetails />} />
        <Route path="/management" element={<Management />} />
        <Route path="/purchases" element={<Purchases />} />
      </Routes>
    </Router>
  );
};

export default App;
