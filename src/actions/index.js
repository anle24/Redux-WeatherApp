import axios from 'axios';

const API_KEY = '8c025e5eb2879baf30935c37e3417bf2';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`; // use `` ES6 template strings

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  // console.log('Request:', request);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
