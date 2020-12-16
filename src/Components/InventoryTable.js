import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import Moment from "react-moment";
import { useDispatch, useSelector } from "react-redux";
import LogoAndIcons from "../Images";
import { tableStyels } from "./ComponentStyles";
import { tableRows } from "../Modules/actions/tableRowsAction";

function InventoryTable() {
  const dispatch = useDispatch();

  const tableData = useSelector((state) => state.tableRowsReducers.tableRow);

  let totalPage = tableData
    ? tableData.data
      ? tableData.data.totalSku
      : 1
    : 1;

  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);

  const handlePage = (event, next) => {
    setCurrentPage(next);
  };

  const handleRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
  };

  const classes = tableStyels();
  const Data_array = tableData
    ? tableData.data_array
      ? tableData.data_array
      : []
    : [];

  useEffect(() => {
    dispatch(tableRows(currentPage, rowsPerPage));
  }, [dispatch, currentPage, rowsPerPage]);

  const item = Data_array.map((data) => {
    return (
      <TableRow key={data.sku_number}>
        <TableCell>{data.sku_number}</TableCell>
        <TableCell align="right"> {data.design_code}</TableCell>
        <TableCell align="right">{data.metal_type}</TableCell>
        <TableCell align="right">{data.design_category}</TableCell>
        <TableCell align="right">{data.diamond_weight}</TableCell>
        <TableCell align="right">{data.net_weight}</TableCell>
        <TableCell align="right">{data.sales_value}</TableCell>
        <TableCell align="right">{data.sku_quantity}</TableCell>
        <TableCell align="right">
          <Moment format="DD-MM-YY">{data.createdAt}</Moment>
        </TableCell>

        <TableCell align="right">
          <span>
            <img
              className={classes.iconEye}
              src={LogoAndIcons["Eye"]}
              alt="i"
            />
            <img
              className={classes.iconEye}
              src={LogoAndIcons["Pdf"]}
              alt="p"
            />
          </span>
        </TableCell>
      </TableRow>
    );
  });

  return (

    <Table component={Paper} className={classes.table}>
      <TableHead className={classes.tableHead}>
        <TableRow>
          <TableCell>SKU</TableCell>
          <TableCell align="right">Design Code</TableCell>
          <TableCell align="right">Material</TableCell>
          <TableCell align="right">Design Category</TableCell>
          <TableCell align="right">Diamond Ct.</TableCell>
          <TableCell align="right">Net Weight</TableCell>
          <TableCell align="right">Price</TableCell>
          <TableCell align="right">SKU QTY</TableCell>
          <TableCell align="right">Date</TableCell>
          <TableCell align="right">Actinos</TableCell>
        </TableRow>
      </TableHead>
      <>
      <TableBody>{item}</TableBody>
      </>
     
      <TableFooter>
        <TableRow>
          <TablePagination
            page={currentPage}
            count={totalPage}
            rowsPerPage={rowsPerPage}
            rowsPerPageOptions={[5, 10, 15]}
            onChangePage={handlePage}
            onChangeRowsPerPage={handleRowsPerPage}
          />
        </TableRow>
      </TableFooter>
    </Table>
   
  );
}

export default InventoryTable;
