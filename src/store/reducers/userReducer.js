const FILTER_BY_USER = "FILTER_BY_USER";
let initialState = "";

const userReducer = (state = initialState, action) => {
  console.log("기존 state >>", state);
  switch (action.type) {
    case FILTER_BY_USER:
      console.log("filter 걸린 state >>", state);
      console.log("filter 걸린 action.payload >>", action.payload);
      return action.payload;
    default:
      console.log("default state >>", state);
      return state;
  }
};

export default userReducer;
