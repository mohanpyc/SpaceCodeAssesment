import { BAR_CHART } from "../constants/constants";

export const barChartReducers = (state = {}, action) => {
  switch (action.type) {
    case BAR_CHART:
      let DataArray = action.payload.data_array.slice(0, 7);
      let SKUArray = DataArray.map((item) => item.sales_value);
      return {
        barChart: SKUArray,
      };
    default:
      return state;
  }
};
