const GET_TOKEN_STATE = "GET_TOKEN_STATE";

const initialState = [];

const tokenReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TOKEN_STATE:
      return action.payload;
    default:
      return state;
  }
};
export default tokenReducer;
