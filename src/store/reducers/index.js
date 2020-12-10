import { combineReducers } from "redux";
import exporterReducer from "./exporterReducer";
import categoryReducer from "./categoryReducer";
import tokenReducer from "./tokenReducer";

export default combineReducers({
  exporterReducer,
  categoryReducer,
  tokenReducer
});
