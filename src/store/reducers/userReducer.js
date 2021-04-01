const FILTER_BY_USER = "FILTER_BY_USER";
let initialState = "";

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_BY_USER:
      return action.payload;
    default:
      return state;
  }
};

export default userReducer;
