const SORT_BY_ALPHABET = "SORT_BY_ALPHABET";
const FILTER_BY_VALUE = "FILTER_BY_VALUE";
const FILTER_BY_CATEGORY = "FILTER_BY_CATEGORY";
const LOAD_DATA = "LOAD_DATA";
const LOAD_MORE_PAGE = "LOAD_MORE_PAGE";

const initialState = {
  appliedFilters: []
};

const exporterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_BY_VALUE:
      //filter by value
      return state;
    case FILTER_BY_CATEGORY:
      //filter by category
      return state;
    case SORT_BY_ALPHABET:
      //sort alphabetically
      return state;
    case LOAD_DATA:
      //load data
      return state;
    case LOAD_MORE_PAGE:
      //load more page
      return state;
    default:
      return state;
  }
};
export default exporterReducer;
