import React from 'react';

import BookList from '../book-list';

const HomePage = () => {
  const books = [
    {
      title: 'Production-Ready Microservices',
      author: 'Susan J. Fowler'
    },
    {
      title: 'Release It!',
      author: 'Michel T. Nugard'
    }
  ];

  return (
    <BookList books={books} />
  );
};

export default HomePage;
