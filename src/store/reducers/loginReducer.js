const GET_LOGIN_STATE = "GET_LOGIN_STATE";

const initialState = sessionStorage.getItem("access_token");

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_LOGIN_STATE:
      return action.payload;
    default:
      return state;
  }
};
export default loginReducer;
