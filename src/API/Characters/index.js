import API from '..';

const getCharacters = () => API.get('people/');
const getCharacterById = (id = '') => API.get(`people/${id}`);

export { getCharacters, getCharacterById };