import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';
import Table from '../components/Table';

function StarWars() {
  const { loading } = useContext(PlanetsContext);

  return (
    <main>
      {!loading && <Table />}
    </main>
  );
}

export default StarWars;
