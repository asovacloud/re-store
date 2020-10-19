import React from 'react';

import './book-list-item.css';

const BookListItem = (props) => {
  const { title, author } = props.book;

  return (
    <li>
      <div>Title: {title}</div>
      <div>Authour: {author}</div>
    </li>
  );
};

export default BookListItem;
