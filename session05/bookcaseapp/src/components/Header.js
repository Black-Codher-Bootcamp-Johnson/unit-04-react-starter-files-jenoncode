import { Link } from "react-router-dom";
// import Header from "./Header.Module.css";

const Header  = () => {
  return (
    <>
      <header>
        <h1>Jen's Bookcase</h1>
        <Link to="/"> Home </Link>
        <Link to="/about"> About the App </Link>

        <Link to="/bookcase" className="booklink">
          {" "}
          Bookcase
        </Link>
      </header>
    </>
  );
};
export default Header;
