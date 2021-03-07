import React from "react";
import { NavLink } from "react-router-dom";
import { TableFooter, Button, Paper, TableRow, TableHead, TableContainer, TableCell, TableBody, Table } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

const recordUri = "/empresa"
const MotoristaList = (props) => {
    return (<React.Fragment>
        <TableContainer component={Paper}>
            <Table aria-label="Lista dos veiculos" stickyHeader>
                <TableHead>
                    <TableRow>
                        <TableCell>Nome</TableCell>
                        <TableCell align="center">Apelido</TableCell>
                        <TableCell align="center">Telefone</TableCell>
                        <TableCell align="center">Email</TableCell>
                        <TableCell align="center">Ativo</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.rows.length > 0 || (
                        <TableRow key={0}>
                            <TableCell colSpan={5}>No data</TableCell>
                        </TableRow>
                    )}
                    {props.rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell component="th" scope="row">
                                <NavLink to={`${recordUri}/${row.id}`}>{row.data.nome}</NavLink>
                            </TableCell>
                            <TableCell align="center">{row.data.apelido}</TableCell>
                            <TableCell align="center">{row.data.telefones}</TableCell>
                            <TableCell align="center">{row.data.emails}</TableCell>
                            <TableCell align="center">{row.data.ativo ? "Sim" : "Não"}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TableRow key={0}>
                        <TableCell colSpan={5}>
                            <Button color="inherit" component={RouterLink} to={recordUri}>Incluir</Button>
                        </TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </TableContainer>
    </React.Fragment>
    )
}

export default MotoristaList;