const SORT_BY_ALPHABET = "SORT_BY_ALPHABET";
const FILTER_BY_VALUE = "FILTER_BY_VALUE";
const FILTER_BY_CATEGORY = "FILTER_BY_CATEGORY";
const LOAD_DATA = "LOAD_DATA";
const LOAD_MORE_PAGE = "LOAD_MORE_PAGE";

export const filterByValue = payload => ({
  type: FILTER_BY_VALUE,
  payload
});

export const filterByCategory = payload => ({
  type: FILTER_BY_CATEGORY,
  payload
});

export const sortByAlphabet = payload => ({
  type: SORT_BY_ALPHABET,
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
