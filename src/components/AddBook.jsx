import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { postBook } from '../redux/books/booksSlice';
import Button from './Button';
import './AddBook.css';

export default function AddBook() {
  const titleInput = useRef();
  const dispatch = useDispatch();
  const { adding } = useSelector((store) => store.books);
  const [book, setBook] = useState({
    title: '',
    author: '',
  });
  const [error, setError] = useState('');

  const add = () => {
    if (book.title.trim().length === 0 || book.author.trim().length === 0) return;
    try {
      dispatch(postBook({
        item_id: uuidv4(),
        ...book,
        category: 'none',
      })).unwrap();
      titleInput.current.focus();
      setBook({
        title: '',
        author: '',
      });
    } catch (error) {
      setError(error);
    }
  };

  const onChange = (element) => {
    const { name, value } = element;
    setBook((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div className="center mb-2rem">
      <h2 className="secondary fs-1-2rem mb-0-5rem">ADD NEW BOOK</h2>
      <form className="book__addform">
        <input
          className="addform__input flex-1"
          ref={titleInput}
          name="title"
          placeholder="Book title"
          value={book.title}
          onChange={({ target }) => onChange(target)}
        />
        <input
          className="addform__input"
          name="author"
          placeholder="Book author"
          value={book.author}
          onChange={({ target }) => onChange(target)}
        />
        <Button run={add} text="ADD BOOK" disabled={adding} className="blue-button bold" />
        {error !== '' && <p>{error}</p>}
      </form>
    </div>
  );
}
