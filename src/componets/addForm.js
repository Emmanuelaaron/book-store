import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();
  const addBookBound = bindActionCreators(addBook, dispatch);

  const [title, setTitle] = useState('');
  const changeTitle = (e) => {
    setTitle(e.target.value);
  };

  const submitBookToStore = (e) => {
    e.preventDefault();
    const newBook = {
      id: Date.now(),
      title,
    };
    addBookBound(newBook);
    setTitle('');
  };

  return (
    <form onSubmit={submitBookToStore}>
      <input type="text" placeholder="Title" onChange={changeTitle} value={title} />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddBook;
