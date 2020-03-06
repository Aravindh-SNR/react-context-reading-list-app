import React, {useContext} from 'react';
import { BookContext } from '../contexts/BookContext';

// Component for displaying the title and author of a book, along with remove book functionality

const BookDetails = ({book}) => {
    const {dispatch} = useContext(BookContext);

    return (
        <li onClick={() => dispatch({type: 'REMOVE_BOOK', id: book.id})}>
            <div className='title'>{book.title}</div>
            <div className='author'>{book.author}</div>
        </li>
    );
};

export default BookDetails;