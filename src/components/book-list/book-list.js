import React, { Component } from 'react';

import { withBookstoreService } from '../hoc';
import BookListItem from '../book-list-item';

class BookList extends Component {

  render() {
    return this.props.books.map((book) => {
      return (
        <BookListItem
          book={book}
          key={book.title} />
      );
    });
  }

};

export default withBookstoreService()(BookList);
