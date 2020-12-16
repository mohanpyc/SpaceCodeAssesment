import {
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useEffect } from "react";
import { Search } from "@material-ui/icons";
import { useSelector, useDispatch } from "react-redux";
import {

  inventoryUnmount,
} from "../Modules/actions/inventoryAction";
import { totalInfo } from "../Modules/actions/totalCarrotsAndQuantityAction";
import InventoryTable from "./InventoryTable";

function Inventory() {

  const dispatch = useDispatch();

  let inventoryResults = useSelector((state) => state);
  const { totalInfoReducers } = inventoryResults;
  const { squQuantity, diamondCarrot } = totalInfoReducers;

  useEffect(() => {
    dispatch(totalInfo());
  }, [dispatch]);


  useEffect(() => {
    return () => {
      dispatch(inventoryUnmount());
    };
  }, [dispatch]);

  return (
    <Grid container>
      <Grid item container style={{ marginBottom: "10px" }}>
        <Grid item lg={4}>
          <TextField
            variant="outlined"
            size="small"
            InputProps={{
              endAdornment: (
                <InputAdornment>
                  <Search />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item lg={4}>
          <Typography variant="h5">
            Total Stones: {squQuantity ? squQuantity : 0}{" "}
          </Typography>
        </Grid>
        <Grid item lg={4}>
          <Typography variant="h5">
            Total Carrot: {diamondCarrot ? diamondCarrot.toFixed(3) : 0}{" "}
          </Typography>
        </Grid>
      </Grid>
      <Grid item container>
        <InventoryTable />
      </Grid>
    </Grid>
  );
}

export default Inventory;
