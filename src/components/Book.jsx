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
    <div>
      <h2>{title}</h2>
      <p>{author}</p>
      <Button run={remove} text="Remove" disabled={removing} />
      {error !== '' && <p>{error}</p>}
    </div>
  );
}

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
