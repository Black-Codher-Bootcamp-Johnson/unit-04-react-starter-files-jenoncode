import React from 'react';
import Book from "./Book";

function Bookcase(props) {
return props.books.map(book => {
    const updateBookcase = [
        {title: 'authors' , quantity: 5},
        
    ]
    const filteredItems = title.filter(title => title.authors > 5);
    return <Book book={book} onClick={() => props.removeBook(book.id)}key={book.id}/>
    
})
}
export default Bookcase;