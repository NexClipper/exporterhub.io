const FILTER_BY_CATE = "FILTER_BY_CATE";

const initialState = "";

const cateFilterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_BY_CATE:
      return action.payload;
    default:
      return state;
  }
};

export default cateFilterReducer;
