import BookList from "../components/BookList";
// import HomePage from "./HomePage.Module.css";

const HomePage = (props) => {
  const { books, addBook } = props;
  return (
    <>
      <h2>Welcome to the Bookcase App</h2>
      <BookList books={books} addBook={addBook}></BookList>
    </>
  );
};

export default HomePage;
