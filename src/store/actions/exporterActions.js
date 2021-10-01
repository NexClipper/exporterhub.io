const ADD_ADMIN_STATE = "ADD_ADMIN_STATE";
const ADD_ADMIN_TYPE_STATE = "ADD_ADMIN_TYPE_STATE";
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
const BEFORE_EDIT_EXPORTER_TAB = "BEFORE_EDIT_EXPORTER_TAB";
const EDITTING_EXPORTER_TAB_CONTENT = "EDITTING_EXPORTER_TAB_CONTENT";
const EDITTING_EXPORTER_TAB_FILENAME = "EDITTING_EXPORTER_TAB_FILENAME";
const EDITTING_EXPORTER_TAB_DESCRIPTION = "EDITTING_EXPORTER_TAB_DESCRIPTION";
const EDITTING_EXPORTER_TAB_VERSION = "EDITTING_EXPORTER_TAB_VERSION";

export const adminTypeAdd = (payload) => ({
  type: ADD_ADMIN_TYPE_STATE,
  payload,
});

export const adminAdd = (payload) => ({
  type: ADD_ADMIN_STATE,
  payload,
});

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
export const edittingExporterTabContent = (payload) => ({
  type: EDITTING_EXPORTER_TAB_CONTENT,
  payload,
});
export const edittingExporterTabFileName = (payload) => ({
  type: EDITTING_EXPORTER_TAB_FILENAME,
  payload,
});
export const edittingExporterTabDescription = (payload) => ({
  type: EDITTING_EXPORTER_TAB_DESCRIPTION,
  payload,
});
export const edittingExporterTabVersion = (payload) => ({
  type: EDITTING_EXPORTER_TAB_VERSION,
  payload,
});
export const beforeEdittingExporterTab = (payload) => ({
  type: BEFORE_EDIT_EXPORTER_TAB,
  payload,
});
