import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import getStarWarsPlanets from '../services/StarWarsApi';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // estado para renderizaçao condicional de table
  const [filterName, setFilterName] = useState([]);

  useEffect(() => {
    getStarWarsPlanets().then((response) => {
      setData(response.results);
      setFilterName(response.results);
      setLoading(false);
    });
  }, []);

  function filterByName(value) {
    const filtro = filterName
      .filter((element) => element.name.toLowerCase().includes(value.toLowerCase()));
    setFilterName(filtro);
    if (value === '') setFilterName(data);
  }

  const context = {
    data,
    loading,
    filterName,
    filterByName,
  };

  return (
    <PlanetsContext.Provider value={ context }>
      { children }
    </PlanetsContext.Provider>
  );
}

PlanetsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PlanetsProvider;
