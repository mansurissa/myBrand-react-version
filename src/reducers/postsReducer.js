const postsReducer = (state = 0, action) => {
  switch (action.type) {
    case 'GET_POSTS':
      return state + 2;
    default:
      return state;
  }
};

export default postsReducer;
