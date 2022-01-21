import * as React from "react";
import { Box, Fab, Table, Paper } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

function createData(
  title: string,
  category: string,
  currency: string,
  cost: number,
  sharedGroup: string
) {
  return { title, category, currency, cost, sharedGroup };
}

const rows = [
  createData("Dinner", "Food", "NTD", 200, "Goup1"),
  createData("Lunch", "Food", "NTD", 130, "Me"),
];

export default function ListExpenses() {
  return (
    <Box margin={2}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="left">Title</TableCell>
              <TableCell align="right">Category</TableCell>
              <TableCell align="right">Cost</TableCell>
              <TableCell align="right">Shared Group</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.title}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.title}
                </TableCell>
                <TableCell align="right">{row.category}</TableCell>
                <TableCell align="right">
                  {row.currency} {row.cost}
                </TableCell>
                <TableCell align="right">{row.sharedGroup}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
