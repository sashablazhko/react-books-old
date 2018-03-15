import { combineReducers } from 'redux';
import { SET_SEARCH_TERM, ADD_API_DATA, ADD_API_BOOKS } from './actions';

const searchTerm = (state = '', action) => {
  if (action.type === SET_SEARCH_TERM) {
    return action.payload;
  }
  return state;
};

const apiChapters = (state = {}, action) => {
  if (action.type === ADD_API_DATA) {
    return Object.assign({}, state, { [action.payload.id_chapter]: action.payload });
  }
  return state;
};

const initialBooksState = {
  books: []
};

const apiBooks = (state = initialBooksState, action) => {
  if (action.type === ADD_API_BOOKS) {
    return {
      ...state,
      books: [...state.books, ...action.payload]
    };
  }
  return state;
};

const rootReducer = combineReducers({ searchTerm, apiChapters, apiBooks });

export default rootReducer;
