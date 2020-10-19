import React, { Component } from 'react';
import { connect } from 'react-redux';

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

const mapStateToProps = ({books}) => {
  return { books }
};

export default connect(mapStateToProps)(BookList);
