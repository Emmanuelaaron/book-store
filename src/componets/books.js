import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import AddBook from './addForm';
import BookItem from './bookItem';
import { loadBooks } from '../redux/books/books';

const Books = () => {
  const dispatch = useDispatch();
  const loadBooksBound = bindActionCreators(loadBooks, dispatch);
  const books = useSelector((state) => state.booksReducer);

  useEffect(() => {
    loadBooksBound();
    return null;
  }, []);

  return (
    <>

      <div className="bookContainer">
        {Object.keys(books).map((id) => (

          <BookItem
            key={id}
            title={books[id][0].title}
            category={books[id][0].category}
            id={id}
          />

        ))}
      </div>

      <AddBook />
    </>
  );
};

export default Books;
