import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';
import Button from './Button';

export default function Book({
  id, title, author,
}) {
  const dispatch = useDispatch();
  return (
    <div>
      <h2>{title}</h2>
      <p>{author}</p>
      <Button run={() => dispatch(removeBook(id))} text="Remove" />
    </div>
  );
}

Book.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
