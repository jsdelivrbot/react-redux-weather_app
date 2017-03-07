import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather';
import thunk from 'redux-thunk';


const rootReducer = combineReducers({
  weather: WeatherReducer
});

export default rootReducer;
