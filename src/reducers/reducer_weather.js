import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  // console.log('Action received', action);
  switch (action.type) {
    case FETCH_WEATHER:
      // return state.concat([action.payload.data]); don't mutate, create new array
      return [ action.payload.data, ...state ]; // ES6, inserting new data at the top
  }

  return state;
}
