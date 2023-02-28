import AddBook from './AddBook';
import Book from './Book';

const books = [
  {
    id: 1,
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
  },
  {
    id: 2,
    title: 'Dune',
    author: 'Frank Herbert',
  },
  {
    id: 3,
    title: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
  },
];

export default function Books() {
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
