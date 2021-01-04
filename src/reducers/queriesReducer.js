const initialState = {
  queries: {},
  loading: false,
};

export const queries = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'QUERIES_PENDING':
      return { ...state, loading: true };
    case 'QUERIES_SUCCESS':
      return {
        ...state,
        loading: false,
        queries: action.payload,
      };

    default:
      return state;
  }
};
