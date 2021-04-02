const FILTER_BY_SORT = "FILTER_BY_SORT";

const initialState = "popular";

const sortFilterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_BY_SORT:
      return action.payload;
    default:
      return state;
  }
};

export default sortFilterReducer;
