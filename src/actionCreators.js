import axios from 'axios';
import { SET_SEARCH_TERM, ADD_API_DATA } from './actions';

export function setSearchTerm(searchTerm) {
  return { type: SET_SEARCH_TERM, payload: searchTerm };
}

export function addAPIData(apiData) {
  return { type: ADD_API_DATA, payload: apiData };
}

export function getAPIDetails(idBook, idChapter) {
  return (dispatch) => {
    axios
      .get(`http://laravel-books/api/books/${idBook}/${idChapter}`)
      .then(response => {
        dispatch(addAPIData(response.data))
      })
      .catch(error => {
        console.log('axios error', error);
      })
  }
}