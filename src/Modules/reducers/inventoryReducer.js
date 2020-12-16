import { INVENTORY_DATA, INVENTORY_DATA_CLEAR } from "../constants/constants";

export const inventoryReducer = (state = {}, action) => {
  switch (action.type) {
    case INVENTORY_DATA:
      return { inventory: action.payload };
    case INVENTORY_DATA_CLEAR:
      return { inventory: {} };
    default:
      return state;
  }
};
