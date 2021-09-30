import { v4 as uuidv4 } from 'uuid';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const LOAD_BOOKS = 'bookStore/books/LOAD_BOOKS';

const API_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/qfiFIDOzvo3tq0dSOKvi/books/';

export const addBook = (book) => async (dispatch) => {
  dispatch({ type: ADD_BOOK });
  await fetch(API_URL, {
    method: 'POST',
    body: new URLSearchParams({
      item_id: uuidv4(),
      title: book.title,
      category: book.category,
    }),
  });
  const response = await fetch(API_URL);
  const state = await response.json();
  dispatch({ type: LOAD_BOOKS, state });
};

export const removeBook = (bookId) => async (dispatch) => {
  dispatch({ type: REMOVE_BOOK });
  await fetch(`${API_URL}${bookId}`, {
    method: 'DELETE',
  });
  const response = await fetch(API_URL);
  const state = await response.json();
  dispatch({ type: LOAD_BOOKS, state });
};

export const loadBooks = () => async (dispatch) => {
  const response = await fetch(API_URL);
  const state = await response.json();
  dispatch({ type: LOAD_BOOKS, state });
};

const reducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD_BOOKS:
      return action.state;
    default:
      return state;
  }
};

export default reducer;
