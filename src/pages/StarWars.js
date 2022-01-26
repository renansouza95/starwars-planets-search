import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import Filters from '../components/Filters';
import Table from '../components/Table';

function StarWars() {
  const { loading } = useContext(PlanetsContext);

  return (
    <>
      <header>
        <h1>Projeto Star Wars - TRYBE</h1>
      </header>
      <main>
        <Filters />
        {!loading && <Table />}
      </main>
    </>
  );
}

export default StarWars;
