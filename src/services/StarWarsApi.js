const END_POINT = 'https://swapi-trybe.herokuapp.com/api/planets/';

async function getStarWarsPlanets() {
  const response = await fetch(END_POINT);
  const json = await response.json();
  return response.ok ? Promise.resolve(json) : Promise.reject(json);
}

export default getStarWarsPlanets;
