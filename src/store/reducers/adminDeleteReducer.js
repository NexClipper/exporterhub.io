const DELETE_ADMIN_STATE = "DELETE_ADMIN_STATE";

const initialState = "";

const adminDeleteReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_ADMIN_STATE:
      return action.payload;
    default:
      return state;
  }
};

export default adminDeleteReducer;
