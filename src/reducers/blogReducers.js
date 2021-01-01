const initialStatePosts = {
  posts: [],
  isPending: true,
};

export const fetchPosts = (state = initialStatePosts, action = {}) => {
  switch (action.type) {
    case 'FETCH_PENDING':
      return { ...state, isPending: true };
    case 'FETCH_SUCCESS':
      return { ...state, posts: action.payload, isPending: false };
    case 'FETCH_FAILED':
      return { state, error: action.payload };
    default:
      return state;
  }
};
