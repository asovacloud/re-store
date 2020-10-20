import React, { Component } from 'react';
import { connect } from 'react-redux';

import BookListItem from '../book-list-item';
import { withBookstoreService } from '../hoc';
import {
  fetchBooks,
  bookAddedToCart
} from '../../actions';
import { compose } from '../../utils';
import ErrorIndicator from '../error-indicator';

const BookList = ({ books, onAddedToCart }) => {

  return (
    <ul className="book-list">
      {
        books.map((book) => {
          return (
            <BookListItem
              book={ book }
              key={ book.id }
              onAddedToCart={ () => onAddedToCart(book.id) } />
          );
        })
      }
    </ul>
  );

};

class BookListContainer extends Component {

  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const { books, error, loading, onAddedToCart } = this.props;

    if (loading) {
      return (
        <p>Loading...</p>
      );
    }

    if (error) {
      return (
        <ErrorIndicator />
      );
    }

    return (
      <BookList
        books={ books }
        onAddedToCart={ onAddedToCart }
      />
    );
  }

};

const mapStateToProps = ({books, loading, error}) => {
  return {
    books,
    loading,
    error
  }
};

const mapDispatchToProps = (dispatch, { bookstoreService }) => {
  return {
    fetchBooks: fetchBooks(bookstoreService, dispatch),
    onAddedToCart: (id) => dispatch(bookAddedToCart(id))
  };
}


export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);