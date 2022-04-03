import React from 'react';
import Book from "./Book";

function BookList(props) {
return props.books.map(book => {

    return <Book book={book} onClick={() => props.addBook(book.id)}key={book.id}/>
})
}
export default BookList;