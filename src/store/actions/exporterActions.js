const SORT_BY_POPULARITY = "SORT_BY_POPULARITY";
const SORT_BY_CURRENT = "SORT_BY_CURRENT";
const FILTER_BY_VALUE = "FILTER_BY_VALUE";
const LOAD_DATA = "LOAD_DATA";
const LOAD_MORE_DATA = "LOAD_MORE_DATA";
const LOAD_CATEGORIES = "LOAD_CATEGORIES";

export const filterByValue = payload => ({
  type: FILTER_BY_VALUE,
  payload
});

export const sortByPopularity = payload => ({
  type: SORT_BY_POPULARITY,
  payload
});

export const sortByCurrent = payload => ({
  type: SORT_BY_CURRENT,
  payload
});

export const loadData = payload => ({
  type: LOAD_DATA,
  payload
});

export const loadMoreData = payload => ({
  type: LOAD_MORE_DATA,
  payload
});

export const loadCategoriesData = payload => ({
  type: LOAD_CATEGORIES,
  payload
});
