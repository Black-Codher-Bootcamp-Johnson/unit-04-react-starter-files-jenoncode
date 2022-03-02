import React from 'react';

function Book(props) {
  console.log(props.book)
  return (
<div>
  <img src={props.book.volumeInfo.imageLinks.thumbnail}/>
  <h2>
  {props.book.volumeInfo.title}
  </h2>
  <h3>{props.book.volumeInfo.authors}</h3>
  <p>{props.book.saleInfo.retailPrice ? props.book.saleInfo.retailPrice.amount : 'No price defined'}</p>
</div>
  )
}

export default Book;
