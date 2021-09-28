import React from 'react';
import { useSelector } from 'react-redux';
// import { bindActionCreators } from 'redux';
import AddBook from './addForm';
// import { loadBooks } from '../redux/books/books';

const Books = () => {
  const books = useSelector((state) => state.booksReducer);
  // const loadBooksBound = bindActionCreators(loadBooks, dispatch)
  return (
    <>
      <h1>My Books</h1>

      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title}

          </li>
        ))}
      </ul>
      <AddBook />
    </>
  );
};

export default Books;
