/* eslint-disable import/no-extraneous-dependencies */
import { useSelector } from 'react-redux';
import AddBook from './AddBook';
import Book from './Book';

export default function Books() {
  const { books } = useSelector((store) => store.books);
  const booksList = books.map((book) => (
    <Book
      key={book.id}
      title={book.title}
      author={book.author}
    />
  ));

  return (
    <>
      <section>
        {booksList}
      </section>
      <AddBook />
    </>
  );
}
