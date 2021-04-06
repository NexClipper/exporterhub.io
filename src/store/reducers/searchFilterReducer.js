const FILTER_BY_SEARCH = "FILTER_BY_SEARCH";

const initialState = "";

const searchFilterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_BY_SEARCH:
      return action.payload;
    default:
      return state;
  }
};

export default searchFilterReducer;
