const FILTER_BY_NAV = "FILTER_BY_NAV";

const initialState = "";

const navFilterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_BY_NAV:
      return action.payload;
    default:
      return state;
  }
};

export default navFilterReducer;
