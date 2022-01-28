import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PlanetsContext from './PlanetsContext';
import getStarWarsPlanets from '../services/StarWarsApi';

function PlanetsProvider({ children }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // estado para renderizaçao condicional de table
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    getStarWarsPlanets().then((response) => {
      setData(response.results);
      setFilterData(response.results);
      setLoading(false);
    });
  }, []);

  function filterByName(value) {
    const filterName = filterData
      .filter((element) => element.name.toLowerCase().includes(value.toLowerCase()));
    setFilterData(filterName);
    if (value === '') setFilterData(data);
  }

  function filterByNumericValues(obj) {
    const { column, comparison, value } = obj;
    if (comparison === 'maior que') {
      setFilterData(filterData.filter((planet) => planet[column] > Number(value)));
    }
    if (comparison === 'menor que') {
      setFilterData(filterData.filter((planet) => planet[column] < Number(value)));
    }
    if (comparison === 'igual a') {
      setFilterData(filterData.filter((planet) => planet[column] === value));
    }
  }

  const context = {
    data,
    loading,
    filterData,
    filterByName,
    filterByNumericValues,
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
