import axios from 'axios';
import { SET_SEARCH_TERM, ADD_API_DATA, ADD_API_BOOKS } from './actions';

export function setSearchTerm(searchTerm) {
  return { type: SET_SEARCH_TERM, payload: searchTerm };
}

export function addAPIChapters(apiChapters) {
  return { type: ADD_API_DATA, payload: apiChapters };
}

export function getAPIChapters(idBook, idChapter) {
  return dispatch => {
    axios
      .get(`http://laravel-books/api/books/${idBook}/${idChapter}`)
      .then(response => {
        dispatch(addAPIChapters(response.data.chapter[0]));
      })
      .catch(error => {
        console.log('axios error', error);
      });
  };
}

export function addAPIBooks(apiBooks) {
  return { type: ADD_API_BOOKS, payload: apiBooks };
}

export function getAPIBooks() {
  return dispatch => {
    axios
      .get(`http://laravel-books/api/books`)
      .then(response => {
        dispatch(addAPIBooks(response.data));
      })
      .catch(error => {
        console.log('axios error', error);
      });
  };
}
