import React from 'react';
import { useSelector } from 'react-redux';
// import { bindActionCreators } from 'redux';
import AddBook from './addForm';
import BookItem from './bookItem';
// import { loadBooks } from '../redux/books/books';

const Books = () => {
  const books = useSelector((state) => state.booksReducer);
  // const loadBooksBound = bindActionCreators(loadBooks, dispatch)
  return (
    <>

      <h1>My Books</h1>

      <div>
        {books.map((book) => (
          <BookItem
            key={book.id}
            title={book.title}
            author={book.author}
            genre={book.genre}
            id={book.id}
          />
        ))}
      </div>

      <AddBook />
    </>
  );
};

export default Books;
