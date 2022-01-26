import React, { useContext } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Table() {
  const { data } = useContext(PlanetsContext);
  const title = data
    .map((element) => Object.keys(element))[0] // retorna valor das chaves do obj
    .filter((nome) => nome !== 'residents'); // retorno sem a chave 'residents'
  return (
    <table>
      <thead>
        <tr>
          {title.map((element, index) => (
            <th key={ index }>{ element }</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((planet, index) => (
          <tr key={ index }>
            <td>
              { planet.name }
            </td>
            <td>
              { planet.rotation_period }
            </td>
            <td>
              { planet.orbital_period }
            </td>
            <td>
              { planet.diameter }
            </td>
            <td>
              { planet.climate }
            </td>
            <td>
              { planet.gravity }
            </td>
            <td>
              { planet.terrain }
            </td>
            <td>
              { planet.surface_water }
            </td>
            <td>
              { planet.population }
            </td>
            <td>
              { planet.films }
            </td>
            <td>
              { planet.created }
            </td>
            <td>
              { planet.edited }
            </td>
            <td>
              { planet.url }
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
