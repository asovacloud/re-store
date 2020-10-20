import React, { Component } from 'react';
import { connect } from 'react-redux';

import BookListItem from '../book-list-item';
import { withBookstoreService } from '../hoc';
import {
  booksLoaded,
  booksRequested
} from '../../actions';
import { compose } from '../../utils';

class BookList extends Component {

  componentDidMount() {
    const { bookstoreService, booksLoaded, booksRequested } = this.props;

    booksRequested();
    bookstoreService
      .getBooks()
      .then((data) => booksLoaded(data));
  }

  render() {
    const { books, loading } = this.props;

    if (loading) {
      return (
        <p>Loading...</p>
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

const mapStateToProps = ({books, loading}) => {
  return {
    books,
    loading
  }
};

const mapDispatchToProps = {
  booksLoaded,
  booksRequested
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList);