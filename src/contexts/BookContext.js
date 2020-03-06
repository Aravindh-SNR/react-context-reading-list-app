import React, { createContext, useReducer, useEffect } from 'react';
import { bookReducer } from '../reducers/bookReducer';

// Context that will be consumed by the all the components
export const BookContext = createContext();

// Context Provider component that will surround all the other components
const BookContextProvider = props => {

    // Set initial state to books item from local storage or an empty array if books item is empty
    const [books, dispatch] = useReducer(bookReducer, JSON.parse(localStorage.getItem('books')) || []);

    // Set books item in local storage everytime a book is added, or remove it if books list is empty
    useEffect(() => {
        books.length ? localStorage.setItem('books', JSON.stringify(books))
                     : localStorage.removeItem('books');
    }, [books]);

    return (
        <BookContext.Provider value={{books, dispatch}}>
            {props.children}
        </BookContext.Provider>
    );
};

export default BookContextProvider;