const initialStatePosts = {
  posts: [],
  isPending: false,
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

const initialStateOnePost = {
  post: {},
  isPending: true,
};

export const fetchOnePost = (state = initialStateOnePost, action = {}) => {
  switch (action.type) {
    case 'FETCH_ONE_PENDING':
      return { ...state, isPending: true };
    case 'FETCH_ONE_SUCCESS':
      return { ...state, post: action.payload, isPending: false };
    case 'FETCH_ONE_FAILED':
      return { state, error: action.payload };
    default:
      return state;
  }
};

const initialStateComments = {
  comments: [],
  loadingComments: true,
};

export const fetchComments = (state = initialStateComments, action = {}) => {
  switch (action.type) {
    case 'FETCH_COMMENTS_PENDING':
      return { ...state, loadingComments: true };
    case 'FETCH_COMMENTS_SUCCESS':
      return { ...state, comments: action.payload, loadingComments: false };
    case 'FETCH_COMMENTS_FAILED':
      return state;
    default:
      return state;
  }
};
const initialStateSubs = {
  subs: 0,
  loadingSubs: true,
};

export const fetchSubs = (state = initialStateSubs, action = {}) => {
  switch (action.type) {
    case 'FETCH_SUBS_PENDING':
      return { ...state, loadingComments: true };
    case 'FETCH_SUBS_SUCCESS':
      return { ...state, subs: action.payload, loadingSubs: false };
    default:
      return state;
  }
};
