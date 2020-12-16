import { Grid, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import { Line } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
import { barChart } from "../Modules/actions/barChartsAction";
function DashBoard() {
  const dispatch = useDispatch();
  const barChartData = useSelector((state) => state.barChartReducers.barChart);

  const data = {
    labels: barChartData,
    datasets: [
      {
        label: "Last Seven Sales value updates of SKU PRICE",
        data: barChartData,
      },
    ],
  };

  useEffect(() => {
    dispatch(barChart());
  }, [dispatch]);

  return (
    <div>
      <Grid>
        <Typography>Chats Based on the SKU Price</Typography>
        <Line data={data}  />
      </Grid>
    </div>
  );
}

export default DashBoard;
