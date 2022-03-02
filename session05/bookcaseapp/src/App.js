import React, {useState} from 'react';
import bookList from './models/books.json';
import BookList from './components/BookList';

function App() {
  const [books] = useState(bookList);
  return <BookList books={books} />
}

export default App;

