import { TABLE_ROWS_CHANGE } from "../constants/constants";

export const tableRowsReducers = (state = {}, action) => {
  switch (action.type) {
    case TABLE_ROWS_CHANGE:
      return {
        tableRow: action.payload,
      };
    default:
      return state;
  }
};
