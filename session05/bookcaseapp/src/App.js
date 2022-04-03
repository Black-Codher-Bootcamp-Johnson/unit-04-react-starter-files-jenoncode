import React, { useState } from "react";
import bookList from "./models/books.json";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import Search from "./components/Search";
import BookcasePage from "./pages/BookcasePage";

function App() {
  const [books, updateBooks] = useState(bookList);
  const [keyword, setKeyword] = useState("");
  const [bookcase, setBookcase] = useState([]);

  function addBook(id) {
    console.log(`The Book ${id} was
   clicked`);
  }
  return (
    <>
      <Router>
        <Header />
        <Search
          keyword={keyword}
          setKeyword={setKeyword}
          findBooks={findBooks}
        />
        <Routes>
          <Route
            exact
            path="/"
            element={<HomePage books={books} addBook={addBook}></HomePage>}
          />
          <Route
            exact
            path="/bookcase"
            element={
              <BookcasePage books={bookcase} removeBook={removeBook}></BookcasePage>
            }
          />
          <Route exact path="/about" element={<AboutUsPage />} />
        </Routes>
      </Router>
    </>
  );

  function removeBook(id) {
    console.log(`The Book ${id} was
   clicked`);
  }

  async function findBooks(keyword) {
    // return bookData.filter(book => book.title.includes(keyword))
    const url = `https://www.googleapis.com/books/v1/volumes?q=${keyword}&filter=paid-ebooks&print-type=books&projection=lite`;
    const results = await fetch(url).then((response) => response.json());
    updateBooks(results.items);
    console.log(results);
    return results;
  }
}
export default App;
