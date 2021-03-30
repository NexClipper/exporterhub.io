const CHANGE_BUCKET_PAGE = "CHANGE_BUCKET_PAGE";

const initialState = 0;

const headerReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_BUCKET_PAGE:
      return action.payload;
    default:
      return state;
  }
};

export default headerReducer;
