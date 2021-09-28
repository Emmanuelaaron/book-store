const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const LOAD_BOOKS = 'bookStore/books/LOAD_BOOKS';

const initialState = [];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = () => ({
  type: REMOVE_BOOK,
});

export const loadBooks = () => ({
  type: LOAD_BOOKS,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];

    case LOAD_BOOKS:
      return [...state];
    case REMOVE_BOOK:
      return {

      };
    default:
      return state;
  }
};

export default reducer;
