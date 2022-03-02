import React from 'react';
import Book from "./Book";

function BookList(props) {
return props.books.map(book => {
    return <Book book={book} />

})
}
export default BookList;