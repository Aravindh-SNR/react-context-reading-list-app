import React, {useContext} from 'react';
import { BookContext } from '../contexts/BookContext';

// Component at the top of the page to display the app name and number of books in the list

const Navbar = () => {
    const {books} = useContext(BookContext);

    return (
        <div className='navbar'>
            <h1>My Reading List</h1>
            <p>Currently, you have {books.length} {books.length === 1 ? 'book' : 'books'} to get through.</p>
        </div>
    );
};

export default Navbar;