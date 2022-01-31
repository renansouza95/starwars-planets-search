import React, { useContext, useState } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Filters() {
  const { filterByName, filterByNumericValues } = useContext(PlanetsContext);

  const [options, setOptions] = useState({
    column: [
      'population',
      'orbital_period',
      'diameter',
      'rotation_period',
      'surface_water',
    ],
    comparison: [
      'maior que',
      'menor que',
      'igual a',
    ],
  });

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

  // TIve ajuda do Luiz Ricardo para implementar a logica do requisito 4
  const selectedOption = (param) => {
    const helper = options.column.filter((option) => option !== param);
    setOptions({
      ...options,
      column: helper,
    });
    setFilters({ ...filters, column: helper[0] });
  };

  const handleClick = (event) => {
    event.preventDefault();
    filterByNumericValues(filters);
    selectedOption(filters.column);
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
          { options.column.map((element, index) => (
            <option
              key={ index }
              value={ element }
              id="column"
            >
              { element }
            </option>
          ))}
        </select>
        <select
          name="comparison"
          id="comparison"
          value={ filters.comparison }
          data-testid="comparison-filter"
          onChange={ handleSelect }
        >
          { options.comparison.map((element, index) => (
            <option
              key={ index }
              value={ element }
              id="comparison"
            >
              { element }
            </option>
          ))}
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
