import React, { useContext } from 'react';
// import PropTypes from 'prop-types';
import PlanetsContext from '../context/PlanetsContext';

function Filters() {
  const { filterByName } = useContext(PlanetsContext);

  const handleOnChange = (event) => {
    const { value } = event.target;
    filterByName(value);
  };

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
          // value={ input.name }
          onChange={ handleOnChange }
        />
      </div>
      {/* <div id="numeric-filter">
        <select>
        </select>
      </div> */}
    </>
  );
}

export default Filters;
