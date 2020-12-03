const SORT_BY_POPULARITY = "SORT_BY_POPULARITY";
const SORT_BY_CURRENT = "SORT_BY_CURRENT";
const FILTER_BY_VALUE = "FILTER_BY_VALUE";
const LOAD_DATA = "LOAD_DATA";
const LOAD_MORE_PAGE = "LOAD_MORE_PAGE";

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

export const loadNewPage = payload => ({
  type: LOAD_MORE_PAGE,
  payload
});
