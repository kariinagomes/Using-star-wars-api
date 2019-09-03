import axios from 'axios';

// baseURL retirado da documentacao: https://swapi.co/documentation
const route = 'https://swapi.co/api/'; //'https://swapi.co/api/people/1/'

const API = axios.create({
  baseURL: route
})

export default API;