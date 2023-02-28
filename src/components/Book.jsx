import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

export default function Book({
  id, title, author,
}) {
  const dispatch = useDispatch();
  return (
    <div>
      <h2>{title}</h2>
      <p>{author}</p>
      <button type="button" onClick={() => dispatch(removeBook(id))}>Remove</button>
    </div>
  );
}

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
