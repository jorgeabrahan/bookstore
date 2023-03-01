import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';
import Button from './Button';
import './Books.css';

export default function Book({
  id, category, title, author,
}) {
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const { removing } = useSelector((store) => store.books);
  const remove = () => {
    try {
      dispatch(removeBook(id)).unwrap();
    } catch (error) {
      setError(error);
    }
  };

  return (
    <div className="book">
      <div className="book__details">
        <div>
          <p className="book__category">{category}</p>
          <h2 className="book__title">{title}</h2>
          <p className="book__author">{author}</p>
          <div className="book__buttons">
            <Button run={() => {}} text="Comments" />
            <Button run={remove} text="Remove" disabled={removing} />
            <Button run={() => {}} text="Edit" />
          </div>
          {error !== '' && <p>{error}</p>}
        </div>
        <div className="book__progress">
          <div className="oval">
            <svg viewBox="25 25 50 50" className="book__oval book__oval--background">
              <circle r="20" cy="50" cx="50" />
            </svg>
            <svg viewBox="25 25 50 50" className="book__oval book__oval--progress">
              <circle r="20" cy="50" cx="50" />
            </svg>
          </div>
          <div>
            <h3 className="book__percentage">0%</h3>
            <p className="secondary">completed</p>
          </div>
        </div>
      </div>
      <div className="book__chapter">
        <p className="secondary">CURRENT CHAPTER</p>
        <h3 className="chapter__num">Chapter n</h3>
        <button className="chapter__button" type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  );
}

Book.propTypes = {
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
