const initialState = {
  isLoggedIn: false,
  loading: false,
  user: {},
};

export const login = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'LOGIN_PENDING':
      return { ...state, loading: true };
    case 'LOGGED_IN':
      return {
        ...state,
        isLoggedIn: true,
        loading: false,
        user: action.payload,
      };
    case 'LOGIN_FAILED':
      return {
        ...state,
        isLoggedIn: false,
        loading: false,
      };
    default:
      return state;
  }
};
