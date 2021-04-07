const ADD_ADMIN_TYPE_STATE = "ADD_ADMIN_TYPE_STATE";

const initialState = null;

const adminAddTypeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ADMIN_TYPE_STATE:
      console.log("type >> ", action.payload);
      return action.payload;
    default:
      return state;
  }
};

export default adminAddTypeReducer;
