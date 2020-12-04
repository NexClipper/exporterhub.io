const FILTER_BY_VALUE = "FILTER_BY_VALUE";
const SORT_BY_POPULARITY = "SORT_BY_POPULARITY";
const LOAD_DATA = "LOAD_DATA";
const LOAD_MORE_DATA = "LOAD_MORE_DATA";

const sortingKey = {
  "Sort by": "exporter_id",
  "Most popular": "stars",
  "Recently registered": "recent_release"
};

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
      const { filterType, data } = action.payload;
      filteredState.categories[filterType] = data;
      const {
        categories: { category, type, value }
      } = filteredState;

      let filteredValues = state.exporters.filter(exporter => {
        console.log(value);
        return (
          (value ? exporter.name.toLowerCase().includes(value) : true) &&
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

      sortByPopularityState.filteredExporters = sortDesc(
        state.filteredExporters,
        sortingKey[sortValue]
      );

      sortByPopularityState.exporters = sortDesc(
        state.exporters,
        sortingKey[sortValue]
      );

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
    case LOAD_MORE_DATA:
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
