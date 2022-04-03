import React from 'react';
// import button from "/Book.Module.css";

function Book(props) {
  return (
<div onClick={props.addBook}>
  <img src={props.book.volumeInfo.imageLinks.thumbnail} alt={props.book.volumeInfo.title}/>
  <h2>
  {props.book.volumeInfo.title}
  </h2>
  <h3>{props.book.volumeInfo.authors}</h3>
  <p>{props.book.saleInfo.retailPrice ? props.book.saleInfo.retailPrice.amount : 'No price defined'}</p>
  <button onClick={() =>
(props.onClick())}> Add +</button>
</div>
  )
}

export default Book;


