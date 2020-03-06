// Reducer function that will be passed into the useReducer hook to manage state in the BookContext component

export const bookReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_BOOK':
            const {title, author} = action.book;
            return [...state, {title, author, id: state.length + 1}];
        case 'REMOVE_BOOK':
            let newId = 1;
            return state.filter(book => {
                if (book.id !== action.id) {
                    book.id = newId++;
                    return true;
                }
                return false;
            });
        default:
            return state;
    }
};