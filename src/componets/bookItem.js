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
    title, category, id,
  } = props;
  return (
    <div className="book">
      <h4>{category}</h4>
      <h1>{title}</h1>
      <button type="button" onClick={() => removeBookAction(id)}>delete</button>
    </div>
  );
};

BookItem.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default BookItem;
