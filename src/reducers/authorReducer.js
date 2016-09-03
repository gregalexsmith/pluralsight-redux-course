import * as types from '../actions/actionTypes';
import initialState from './initialState';

//what does this do?
  // a reducer to update certain data on the redux store.
  // we can see what is in the store by looking at initialState.js

export default function authorReducer(state = initialState.authors, action) {
  switch (action.type) {
    case types.LOAD_AUTHORS_SUCCESS:
      return action.authors;

    default:
      return state;
  }

}
