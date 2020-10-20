const booksLoaded = (newBooks) => ({
  type: 'FETCH_BOOKS_SUCCESS',
  payload: newBooks
});

const booksRequested = () => ({
  type: 'FETCH_BOOKS_REQUESD'
});

const booksError = (error) => ({
  type: 'FETCH_BOOKS_FAILURE',
  payload: error
});

const bookAddedToCart = (bookId) => {
  return {
    type: 'BOOK_ADDED_TO_CART',
    payload: bookId
  };
};

const fetchBooks = (bookstoreService, dispatch) => () => {
  dispatch(booksRequested());
  bookstoreService.getBooks()
    .then((data) => dispatch(booksLoaded(data)))
    .catch((error) => dispatch(booksError(error)));
}

export {
  fetchBooks,
  bookAddedToCart
};
