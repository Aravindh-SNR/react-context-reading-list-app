import React, {useContext, useState, useRef} from 'react';
import { BookContext } from '../contexts/BookContext';

const BookForm = () => {
    const {dispatch} = useContext(BookContext);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const focusInput = useRef();

    const handleSubmit = event => {
        event.preventDefault();
        dispatch({
            type: 'ADD_BOOK',
            book: {title, author}
        });
        setTitle('');
        setAuthor('');
        focusInput.current.focus();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' id='title' placeholder='Book Title' value={title} required autoComplete='off'
                onChange={event => setTitle(event.target.value)} autoFocus ref={focusInput}
            />
            <input type='text' id='author' placeholder='Author' value={author} required autoComplete='off'
                onChange={event => setAuthor(event.target.value)}
            />
            <input type='submit' value='Add Book' />
        </form>
    );
};

export default BookForm;