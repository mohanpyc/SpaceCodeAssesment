import { combineReducers } from "redux";
import { userLoginReducer } from "./reducers/userReducers";
import { inventoryReducer } from "./reducers/inventoryReducer";
import { totalInfoReducers } from "./reducers/totalCarrotsAndQuantityReducers";
import { tableRowsReducers } from "./reducers/tableRowsReducers";
import { barChartReducers } from "./reducers/barChartReducer";
let localUserInfo = localStorage.getItem("loginInfo");
localUserInfo = JSON.stringify(localUserInfo);

export const initialState = {
  userInfo: { ...localUserInfo.data },
  inventoryInfo: {},
  totalInfoReducers: {},
  tableRowsReducers: {},
  barChartReducers: {},
};

export const reducer = combineReducers({
  userInfo: userLoginReducer,
  inventoryInfo: inventoryReducer,
  totalInfoReducers: totalInfoReducers,
  tableRowsReducers: tableRowsReducers,
  barChartReducers: barChartReducers,
});
