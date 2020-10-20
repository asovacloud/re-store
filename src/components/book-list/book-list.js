import React, { Component } from 'react';
import { connect } from 'react-redux';

import BookListItem from '../book-list-item';
import { withBookstoreService } from '../hoc';
import {
  booksLoaded,
  booksRequested,
  booksError
} from '../../actions';
import { compose } from '../../utils';
import ErrorIndicator from '../error-indicator';

class BookList extends Component {

  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const { books, error, loading } = this.props;

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
      <ul className="book-list">
        {
          books.map((book) => {
            return (
              <BookListItem
                book={book}
                key={book.title} />
            );
          })
        }
      </ul>
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

const mapDispatchToProps = (dispatch, ownProps) => {
  const { bookstoreService } = ownProps;

  return {
    fetchBooks: (...func) => {
      dispatch(booksRequested());
      bookstoreService
        .getBooks()
        .then((data) => dispatch(booksLoaded(data)))
        .catch((error) => dispatch(booksError(error)));
    }
  }
}


export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList);