import React from "react";
import { NavLink } from "react-router-dom";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

// const useStyles = makeStyles({
//   table: {
//     minWidth: 650,
//   },
// });

const ClientList = (props) => {
  return (
    <React.Fragment>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell align="center">Codigo</TableCell>
              <TableCell align="center">Telefone</TableCell>
              <TableCell align="center">Apelido</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* {props.rows.length > 0 || (
              <TableRow key={0}>
                <TableCell colSpan={4}>No data</TableCell>
              </TableRow>
            )} */}
            {props.rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  <NavLink to={`/client/${row.id}`}>{row.data.name}</NavLink>
                </TableCell>
                <TableCell align="center">{row.data.code}</TableCell>
                <TableCell align="center">{row.data.phone}</TableCell>
                <TableCell align="center">{row.data.alias}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </React.Fragment>
  );
};

export default ClientList;
