import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch(action.type){
    case FETCH_WEATHER;
    return state.concat([ action.payload.data ])
    // DO NOT do return state.push[ action.payload.data ]
    // ONLY update state with setState, do NOT manipulate it directly (ie. state.push)
    return [ action.payload.data, ...state];
    //take all of the entries inside the array, creates new array like [city, city, city]


  }
  console.log('action received', action)
  return state;
}
