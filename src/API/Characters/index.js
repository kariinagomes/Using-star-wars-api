import API from '..';
import axios from 'axios';

const getCharacters = () => API.get('people/');
const getCharacterById = (id = '') => API.get(`people/${id}`);

const getHomeworld = (url = '') => axios.get(url).then(function(response) { return response.data });

export { getCharacters, getCharacterById, getHomeworld};