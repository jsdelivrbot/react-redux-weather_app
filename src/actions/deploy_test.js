// import axios from 'axios';
// import thunk from 'redux-thunk';
//
// const API_KEY = 'b5fd75657e1283066e3d789170b07e49';
// const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
// // root_url uses es6 template string syntax at the end
//
// export const FETCH_WEATHER = 'FETCH_WEATHER';
//
//
// export function fetchWeatherOptimistic(response) {
//   return {
//     type: FETCH_WEATHER,
//     payload: response
//   };
// }
// function fetchWeatherSuccess(response) {
//   return {
//     type: FETCH_WEATHER_SUCCESS,
//     payload: response
//   };
// }
//
// function fetchWeatherError(err) {
//   return {
//     type: FETCH_WEATHER_ERROR,
//     payload: err
//   };
// }
//
// export function fetchWeather(city) {
//   const url = `${ROOT_URL}&q=${city},us`;
//   const request = axios.get(url);
//   //returns a promise, doesnt actually contain data
//   console.log('Request:', request)
//
//   return {
//     type: FETCH_WEATHER,
//     payload: request
//   };
// }
