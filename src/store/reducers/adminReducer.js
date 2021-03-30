const GET_ADMIN_STATE = "GET_ADMIN_STATE";

const initialState = false;

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ADMIN_STATE:
      return action.payload;
    default:
      return state;
  }
};
export default adminReducer;
