import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/books';

const AddBook = () => {
  const dispatch = useDispatch();
  const addBookBound = bindActionCreators(addBook, dispatch);

  const [title, setTitle] = useState('');
  const [genre, setGenre] = useState('');
  const [author, setAuthor] = useState('');

  const changeTitle = (e) => {
    setTitle(e.target.value);
  };

  const changeGenre = (e) => {
    setGenre(e.target.value);
  };

  const changeAuthor = (e) => {
    setAuthor(e.target.value);
  };

  const submitBookToStore = (e) => {
    e.preventDefault();
    const newBook = {
      id: uuidv4(),
      genre,
      author,
      title,
    };
    addBookBound(newBook);
    setTitle('');
    setGenre('');
    setAuthor('');
  };

  return (
    <form onSubmit={submitBookToStore}>
      <input type="text" placeholder="Title" onChange={changeTitle} value={title} />
      <input type="text" placeholder="Genre" onChange={changeGenre} value={genre} />
      <input type="text" placeholder="Author" onChange={changeAuthor} value={author} />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddBook;
