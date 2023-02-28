import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/booksSlice';
import Button from './Button';

export default function AddBook() {
  const titleInput = useRef();
  const dispatch = useDispatch();
  const [book, setBook] = useState({
    title: '',
    author: '',
  });

  const add = () => {
    if (book.title.trim().length === 0 || book.author.trim().length === 0) return;
    dispatch(addBook({
      item_id: uuidv4(),
      ...book,
    }));
    titleInput.current.focus();
    setBook({
      title: '',
      author: '',
    });
  };

  const onChange = (element) => {
    const { name, value } = element;
    setBook((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <>
      <h2>ADD NEW BOOK</h2>
      <form>
        <input
          ref={titleInput}
          name="title"
          placeholder="Book title"
          value={book.title}
          onChange={({ target }) => onChange(target)}
        />
        <input
          name="author"
          placeholder="Book author"
          value={book.author}
          onChange={({ target }) => onChange(target)}
        />
        <Button run={add} text="ADD BOOK" />
      </form>
    </>
  );
}
