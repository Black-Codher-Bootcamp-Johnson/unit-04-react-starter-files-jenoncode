import Bookcase from '../components/Bookcase';

const BookcasePage = (props) => {
    const { books, removeBook } = props;
    return (
        <>
            <h2>This is Jennifer's BookcasePage</h2> 
            <Bookcase books={books} removeBook={removeBook}></Bookcase>
            <button type="button" onClick={removeBook}>removeBook</button>
        </>
    );
}

export default BookcasePage;