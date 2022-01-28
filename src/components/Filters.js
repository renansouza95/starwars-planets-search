import React, { useContext, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Filters() {
  const { filterByName, filterByNumericValues } = useContext(PlanetsContext);
  const [filters, setFilters] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });

  const handleChange = (event) => {
    const { value } = event.target;
    filterByName(value);
  };

  const handleSelect = (event) => {
    const { value, name } = event.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleClick = (event) => {
    event.preventDefault();
    filterByNumericValues(filters);
  };

  // https://stackoverflow.com/questions/55757761/handle-an-input-with-react-hooks
  // Loop Infinito
  // useEffect(() => {
  //   filterByName(input.name);
  // }, [input, filterByName]);

  return (
    <>
      <div id="name-filter">
        <input
          data-testid="name-filter"
          type="text"
          name="name"
          onChange={ handleChange }
        />
      </div>
      <div id="numeric-filter">
        <select
          name="column"
          id="column"
          value={ filters.column }
          data-testid="column-filter"
          onChange={ handleSelect }
        >
          <option id="column" value="population">population</option>
          <option id="column" value="orbital_period">orbital_period</option>
          <option id="column" value="diameter">diameter</option>
          <option id="column" value="rotation_period">rotation_period</option>
          <option id="column" value="surface_water">surface_water</option>
        </select>
        <select
          name="comparison"
          id="comparison"
          value={ filters.comparison }
          data-testid="comparison-filter"
          onChange={ handleSelect }
        >
          <option id="comparison" value="maior que">maior que</option>
          <option id="comparison" value="menor que">menor que</option>
          <option id="comparison" value="igual a">igual a</option>
        </select>
        <input
          type="number"
          name="value"
          value={ filters.value }
          data-testid="value-filter"
          onChange={ handleSelect }
        />
        <button
          type="submit"
          data-testid="button-filter"
          onClick={ handleClick }
        >
          Filtrar
        </button>
      </div>
    </>
  );
}

export default Filters;
