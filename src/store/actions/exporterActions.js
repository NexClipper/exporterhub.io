const CHANGE_BUCKET_PAGE = "CHANGE_BUCKET_PAGE";
const SORT_BY_POPULARITY = "SORT_BY_POPULARITY";
const SORT_BY_CURRENT = "SORT_BY_CURRENT";
const FILTER_BY_VALUE = "FILTER_BY_VALUE";
const FILTER_BY_TYPE = "FILTER_BY_TYPE";
const FILTER_BY_USER = "FILTER_BY_USER";
const LOAD_DATA = "LOAD_DATA";
const LOAD_MORE_DATA = "LOAD_MORE_DATA";
const LOAD_CATEGORIES = "LOAD_CATEGORIES";
const GET_TOKEN_STATE = "GET_TOKEN_STATE";
const GET_LOGIN_STATE = "GET_LOGIN_STATE";
const TARGET_UNFORK_REPO = "TARGET_UNFORK_REPO";
const GET_ADMIN_STATE = "GET_ADMIN_STATE";

export const changeBucketPage = (payload) => ({
  type: CHANGE_BUCKET_PAGE,
  payload,
});

export const filterByValue = (payload) => ({
  type: FILTER_BY_VALUE,
  payload,
});

export const filterByType = (payload) => ({
  type: FILTER_BY_TYPE,
  payload,
});

export const filterByUser = (payload) => ({
  type: FILTER_BY_USER,
  payload,
});

export const sortByPopularity = (payload) => ({
  type: SORT_BY_POPULARITY,
  payload,
});

export const sortByCurrent = (payload) => ({
  type: SORT_BY_CURRENT,
  payload,
});

export const loadData = (payload) => ({
  type: LOAD_DATA,
  payload,
});

export const loadMoreData = (payload) => ({
  type: LOAD_MORE_DATA,
  payload,
});

export const loadCategoriesData = (payload) => ({
  type: LOAD_CATEGORIES,
  payload,
});

export const getTokenState = (payload) => ({
  type: GET_TOKEN_STATE,
  payload,
});

export const getLoginState = (payload) => ({
  type: GET_LOGIN_STATE,
  payload,
});

export const targetUnforkRepo = (payload) => ({
  type: TARGET_UNFORK_REPO,
  payload,
});

export const getAdminState = (payload) => ({
  type: GET_ADMIN_STATE,
  payload,
});
