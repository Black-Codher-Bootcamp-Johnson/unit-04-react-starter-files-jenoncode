import React from "react";
// import AboutUsPage from "./AboutUsPage.Module.css";

const AboutUsPage = () => {
  return (
    <div className="header">
      <h1>About</h1>
      <div className="page">
        <h2>My Bookcase Project</h2>
        <p>
          This React application allows a user to add a set of books to a
          collection of books. It connects to the Google Books API and allows
          the user to search and add books.
        </p>
      </div>
    </div>
  );
};

export default AboutUsPage;
