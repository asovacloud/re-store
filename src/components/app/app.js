import React from 'react';

import withBookstoreService from '../hoc/with-bookstore-service';
import './app.css';

const App = ({ bookstoreService }) => {

  console.log(bookstoreService.getBooks());

  return (
    <h1>My App!!!</h1>
  );

};

export default withBookstoreService()(App);
