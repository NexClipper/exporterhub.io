const ADD_ADMIN_STATE = "ADD_ADMIN_STATE";

const initialState = "";

const adminAddReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ADMIN_STATE:
      return action.payload;
    default:
      return state;
  }
};

export default adminAddReducer;
