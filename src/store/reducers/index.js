import { combineReducers } from "redux";
import exporterReducer from "./exporterReducer";
import categoryReducer from "./categoryReducer";
import tokenReducer from "./tokenReducer";
import loginReducer from "./loginReducer";
import userReducer from "./userReducer";
import headerReducer from "./headerReducer";
import unforkReducer from "./unforkReducer";
import adminReducer from "./adminReducer";

export default combineReducers({
  exporterReducer,
  categoryReducer,
  tokenReducer,
  loginReducer,
  userReducer,
  headerReducer,
  unforkReducer,
  adminReducer,
});
