import { combineReducers } from "redux";
import exporterReducer from "./exporterReducer";
import categoryReducer from "./categoryReducer";

export default combineReducers({
  exporterReducer,
  categoryReducer
});
