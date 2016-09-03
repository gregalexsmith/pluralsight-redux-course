import authorApi from '../api/mockAuthorApi.js';
import * as types from './actionTypes';

// this is the redux action funcion...must return an action type and pass to dispatch that calls it
export function loadAuthorsSuccess(authors) {
  return {
    type: types.LOAD_AUTHORS_SUCCESS,
    authors: authors
  };
}

// this is the API call funciton..
export function loadAuthors() {
  return function(dispatch) {
    return authorApi.getAllAuthors().then(authors => {
      dispatch(loadAuthorsSuccess(authors));
    }).catch(error => {
      throw(error);
    });
  };
}
