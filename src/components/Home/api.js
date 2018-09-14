import axios from 'axios';

const url = 'https://swapi.co/api/people/?search=';

export const searchPeople = searchString => axios.get(`${url}${searchString}`);
