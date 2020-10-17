import React, { useContext } from 'react';

import BookstoreServiceContext from '../bookstore-service-context';

const withBookstoreService = () => (Wrapped) => {
  
  return (props) => {
    const bookstoreService = useContext(BookstoreServiceContext);

    return <Wrapped {...props}
                    bookstoreService={bookstoreService}
                    />
  };

};

export default withBookstoreService;