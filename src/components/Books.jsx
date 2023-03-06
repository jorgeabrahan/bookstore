import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createBookstoreApp, loadBooks, setBookstoreId } from '../redux/books/booksSlice';
import AddBook from './AddBook';
import Book from './Book';
import './Books.css';

export default function Books() {
  const dispatch = useDispatch();
  const {
    books, appCreationStatus, loadBooksStatus, apiId, error,
  } = useSelector((store) => store.books);

  /* Effect to create the app or initialize it if theres an existing one */
  useEffect(() => {
    const bookstoreApiID = localStorage.getItem('bookstoreApiID') || null;
    if (bookstoreApiID === null) {
      dispatch(createBookstoreApp());
      return;
    }
    dispatch(setBookstoreId(bookstoreApiID));
  }, [dispatch]);

  /* Effect to load books once the app is initialized */
  useEffect(() => {
    if (apiId === null) return;
    if (books.length >= 1) return;
    dispatch(loadBooks());
  }, [dispatch, apiId]);

  const booksList = books.map((book) => (
    <Book
      key={book.item_id}
      id={book.item_id}
      category={book.category}
      title={book.title}
      author={book.author}
    />
  ));

  let appStatusMsg = <p>Creating app...</p>;
  if (appCreationStatus === 'failed') appStatusMsg = <p>{error}</p>;

  let loadStatusMsg = <p>Loading books...</p>;
  if (loadBooksStatus === 'failed') loadStatusMsg = <p>{error}</p>;
  if (loadBooksStatus === 'succeeded' && books.length === 0) loadStatusMsg = <p>You have no books</p>;
  return (
    <>
      <section className="center books-container">
        {appCreationStatus !== 'succeeded' && appStatusMsg}
        {books.length > 0 ? booksList : loadStatusMsg}
        <hr className="books__divisor" />
      </section>
      <AddBook />
    </>
  );
}
