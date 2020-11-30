const FILTER_BY_VALUE = "FILTER_BY_VALUE";
const SORT_BY_POPULARITY = "SORT_BY_POPULARITY";
const LOAD_DATA = "LOAD_DATA";
const LOAD_MORE_PAGE = "LOAD_MORE_PAGE";

const initialState = {
  appliedFilters: [],
  categories: {
    category: "All",
    type: "Official",
    value: ""
  }
};

const exporterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_BY_VALUE:
      let filteredState = Object.assign({}, state);
      filteredState.categories[action.payload.filterType] = action.payload.data;
      const {
        categories: { category, type, value }
      } = filteredState;
      let filteredValues = state.exporters.filter(exporter => {
        if (!value) {
          return (
            exporter.official === type &&
            (exporter.category === category || category === "All")
          );
        } else
          return (
            exporter.name.toLowerCase().includes(value) &&
            exporter.official === type &&
            (exporter.category === category || category === "All")
          );
      });
      filteredState.filteredExporters = filteredValues;
      filteredState.totalCount = filteredValues.length;
      return filteredState;

    case SORT_BY_POPULARITY:
      let sortByPopularityState = Object.assign({}, state);
      const sortValue = action.payload;
      let sortedPopularityArr = sortDesc(state.filteredExporters, "stars");

      sortByPopularityState.filteredExporters = sortedPopularityArr;
      return sortByPopularityState;
    case LOAD_DATA:
      const count = action.payload.length;
      const countPerPage = 12;
      const totalPages = Math.ceil(count / countPerPage);
      const exporters = action.payload;
      let officialExporters = exporters.filter(exporter => {
        return exporter.official === "Official";
      });
      const officialCount = officialExporters.length;
      return {
        ...state,
        exporters,
        filteredExporters: officialExporters,
        countPerPage,
        totalCount: officialCount,
        currentPage: 1,
        totalPages: totalPages,
        filteredPages: totalPages
      };
    case LOAD_MORE_PAGE:
      //load more page
      return state;
    default:
      return state;
  }
};
export default exporterReducer;

function sortDesc(arr, field) {
  return arr.sort(function (a, b) {
    if (a[field] > b[field]) {
      return -1;
    }
    if (b[field] > a[field]) {
      return 1;
    }
    return 0;
  });
}
