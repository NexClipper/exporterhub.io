const CHANGE_BUCKET_PAGE = "CHANGE_BUCKET_PAGE";
const FILTER_BY_USER = "FILTER_BY_USER";
const ALL_DATA = "ALL_DATA";
const FILTER_BY_SEARCH = "FILTER_BY_SEARCH";
const FILTER_BY_NAV = "FILTER_BY_NAV";
const FILTER_BY_CATE = "FILTER_BY_CATE";
const FILTER_BY_SORT = "FILTER_BY_SORT";
const LOAD_CATEGORIES = "LOAD_CATEGORIES";
const GET_TOKEN_STATE = "GET_TOKEN_STATE";
const GET_LOGIN_STATE = "GET_LOGIN_STATE";
const TARGET_UNFORK_REPO = "TARGET_UNFORK_REPO";
const GET_ADMIN_STATE = "GET_ADMIN_STATE";
const GET_DARK_THEME = "GET_DARK_THEME";
export const changeDarkTheme = (payload) => ({
  type: GET_DARK_THEME,
  payload,
});
export const changeBucketPage = (payload) => ({
  type: CHANGE_BUCKET_PAGE,
  payload,
});
// Filter
export const filterBySearch = (payload) => ({
  type: FILTER_BY_SEARCH,
  payload,
});
export const filterByNav = (payload) => ({
  type: FILTER_BY_NAV,
  payload,
});
export const filterByCate = (payload) => ({
  type: FILTER_BY_CATE,
  payload,
});
export const filterBySort = (payload) => ({
  type: FILTER_BY_SORT,
  payload,
});
export const filterByUser = (payload) => ({
  type: FILTER_BY_USER,
  payload,
});
export const allData = (payload) => ({
  type: ALL_DATA,
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
