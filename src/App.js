import React from 'react';
import PlanetsProvider from './context/PlanetsProvider';
import StarWars from './pages/StarWars';
import './App.css';

function App() {
  return (
    <PlanetsProvider>
      <StarWars />
    </PlanetsProvider>
  );
}

export default App;
