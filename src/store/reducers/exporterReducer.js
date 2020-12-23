const FILTER_BY_VALUE = "FILTER_BY_VALUE";
const FILTER_BY_TYPE = "FILTER_BY_TYPE";
const SORT_BY_POPULARITY = "SORT_BY_POPULARITY";
const LOAD_DATA = "LOAD_DATA";
const LOAD_MORE_DATA = "LOAD_MORE_DATA";
const COUNT_PER_SCROLL = 9;

const sortingKey = {
  "Sort by": "exporter_id",
  "Most popular": "stars",
  "Recently registered": "recent_release",
};

const initialState = {
  appliedFilters: [],
  categories: {
    category: "All",
    type: "All",
    value: "",
  },
};

const exporterReducer = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_BY_VALUE:
      let filteredState = Object.assign({}, state);
      const { filterType, data } = action.payload;
      filteredState.categories[filterType] = data;
      const {
        categories: { category, type, value },
      } = filteredState;

      let filteredValues = state.exporters?.filter((exporter) => {
        return (
          (value ? exporter.name.toLowerCase().includes(value) : true) &&
          (exporter.official === type || type === "All") &&
          (exporter.category === category || category === "All")
        );
      });
      filteredState.filteredExporters = filteredValues;
      filteredState.exposedExporters = filteredValues?.slice(
        0,
        COUNT_PER_SCROLL
      );
      filteredState.totalCount = filteredValues?.length;
      return filteredState;

    case SORT_BY_POPULARITY:
      let sortByPopularityState = Object.assign({}, state);
      const sortValue = action.payload;

      const sortedFilteredExporters = sortDesc(
        state.filteredExporters,
        sortingKey[sortValue]
      );

      const sortedExporters = sortDesc(state.exporters, sortingKey[sortValue]);

      sortByPopularityState.filteredExporters = sortedFilteredExporters;
      sortByPopularityState.exposedExporters = sortedFilteredExporters?.slice(
        0,
        COUNT_PER_SCROLL
      );
      sortByPopularityState.exporters = sortedExporters;

      return sortByPopularityState;

    case LOAD_DATA:
      const count = action.payload.length;
      const totalPages = Math.ceil(count / COUNT_PER_SCROLL);
      const exporters = action.payload;
      let officialExporters = exporters.filter((exporter) => {
        return exporter.official === "Official" || "Unofficial";
      });
      const officialCount = officialExporters.length;
      return {
        ...state,
        exporters,
        filteredExporters: officialExporters,
        exposedExporters: officialExporters.slice(0, COUNT_PER_SCROLL),
        totalCount: officialCount,
        currentPage: 1,
        totalPages: totalPages,
        filteredPages: totalPages,
      };

    case LOAD_MORE_DATA:
      let loadNewDataState = Object.assign({}, state);
      if (
        loadNewDataState.currentPage <=
        loadNewDataState.totalCount / COUNT_PER_SCROLL
      )
        loadNewDataState.currentPage += 1;

      const currentCount = loadNewDataState.currentPage * COUNT_PER_SCROLL;
      const currentExporters =
        loadNewDataState.filteredExporters &&
        loadNewDataState.filteredExporters.slice(0, currentCount);
      loadNewDataState.exposedExporters = currentExporters;

      return loadNewDataState;
    default:
      return state;
  }
};
export default exporterReducer;

function sortDesc(arr, field) {
  return arr?.sort(function (a, b) {
    if (a[field] > b[field]) {
      return -1;
    }
    if (b[field] > a[field]) {
      return 1;
    }
    return 0;
  });
}
