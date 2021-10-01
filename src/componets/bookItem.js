import React from 'react';
import '../styles/bookItem.css';
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
      <div>
        <p className="categoryP">{category}</p>
        <p className="titleP"><strong>{title}</strong></p>
        <button type="button" className="bookButton">Comments</button>
        <button type="button" onClick={() => removeBookAction(id)} className="bookButton">Remove</button>
        <button type="button" className="bookButton">Edit</button>
      </div>
      <div className="bookLeft">
        <div className="percentage">
          <div className="pieChart" />
          <div className="stats">
            <p>64%</p>
            <p className="completed">completed</p>
          </div>
        </div>
        <div>
          <div className="chapterDetails">
            <p className="currentChapter">CURRENT CHAPTER</p>
            <p>Chapter 17</p>
          </div>
          <button type="button" className="updateButton">UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
  );
};

BookItem.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default BookItem;
