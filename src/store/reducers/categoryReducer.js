const LOAD_CATEGORIES = "LOAD_CATEGORIES";

const initialState = [];

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_CATEGORIES:
      return state;
    default:
      return state;
  }
};
export default categoryReducer;
