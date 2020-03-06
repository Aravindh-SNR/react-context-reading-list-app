import React, {useContext} from 'react';
import { BookContext } from '../contexts/BookContext';
import BookDetails from './BookDetails';

// Component for displaying the list of books

const BookList = () => {
    const {books} = useContext(BookContext);

    return books.length ? (
        <div className='book-list'>
            <ul>
                {books.map(book => <BookDetails book={book} key={book.id} />)}
            </ul>
        </div>
    ) : (
        <div className='empty'>Wow, such empty.</div>
    );
};

export default BookList;