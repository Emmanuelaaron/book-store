import React from 'react';
import '../styles/App.css';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { removeBook } from '../redux/books/books';

const BookItem = (props) => {
  const dispatch = useDispatch();
  const removeBookAction = bindActionCreators(removeBook, dispatch);
  const {
    genre, title, author, id,
  } = props;
  return (
    <div className="book">
      <h4>{genre}</h4>
      <h1>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={() => removeBookAction(id)}>Delete</button>
    </div>
  );
};

BookItem.propTypes = {
  genre: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default BookItem;
