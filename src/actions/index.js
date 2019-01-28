import axios from 'axios';

const API_KEY = "2f9d0fc34b4628ee3eae6a60fb0d9e63";
const ROOT_URL =`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
  const FINAL_URL = `${ROOT_URL}&q=${city},india`;
  const request = axios.get(FINAL_URL);
  return {
    type: FETCH_WEATHER,
    payload:request
  };
}
