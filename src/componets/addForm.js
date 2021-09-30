import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();
  const addBookAction = bindActionCreators(addBook, dispatch);

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');

  const changeTitle = (e) => {
    setTitle(e.target.value);
  };

  const changeCategory = (e) => {
    setCategory(e.target.value);
  };

  const submitBookToStore = (e) => {
    e.preventDefault();
    if (title && category) {
      addBookAction({
        title,
        category,
      });
      setTitle('');
      setCategory('');
    }
  };

  return (
    <form onSubmit={submitBookToStore}>
      <input type="text" placeholder="Title" onChange={changeTitle} value={title} />
      <input type="text" placeholder="Category" onChange={changeCategory} value={category} />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddBook;
