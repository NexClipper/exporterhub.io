const TARGET_UNFORK_REPO = "TARGET_UNFORK_REPO";

const initialState = 0;

const unforkReducer = (state = initialState, action) => {
  switch (action.type) {
    case TARGET_UNFORK_REPO:
      return action.payload;
    default:
      return state;
  }
};
export default unforkReducer;
