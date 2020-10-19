const initialState = {
  books: [
    {
      title: 'Production-Ready Microservices 111',
      author: 'Susan J. Fowler 111'
    },
    {
      title: 'Release It! 11',
      author: 'Michel T. Nugard 11'
    }
  ]
};

const reducer = (state = initialState, action) => {

  switch (action.type) {
    case 'BOOKS_LOADED':
      return {
        books: action.payload
      };

    default:
      return state;
  }
};

export default reducer;
