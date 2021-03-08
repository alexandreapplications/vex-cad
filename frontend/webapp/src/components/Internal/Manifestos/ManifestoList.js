import React from "react";
import { NavLink } from "react-router-dom";
import { TableFooter, Button, Paper, TableRow, TableHead, TableContainer, TableCell, TableBody, Table } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import { listaUF } from "../../../common/constraints"

const recordUri = "/manifesto"
const VeiculoList = (props) => {
    return (<React.Fragment>
        <TableContainer component={Paper}>
            <Table aria-label="Lista dos manifestos" stickyHeader>
                <TableHead>
                    <TableRow>
                        <TableCell>Codigo</TableCell>
                        <TableCell align="center">Data</TableCell>
                        <TableCell align="center">Empresa</TableCell>
                        <TableCell align="center">Motorista</TableCell>
                        <TableCell align="center">Veiculo</TableCell>
                        <TableCell align="center">UF</TableCell>
                        <TableCell align="center">Ativo</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.rows.length > 0 || (
                        <TableRow key={0}>
                            <TableCell colSpan={7}>No data</TableCell>
                        </TableRow>
                    )}
                    {props.rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell component="th" scope="row">
                                <NavLink to={`${recordUri}/${row.id}`}>{row.data.codigo}</NavLink>
                            </TableCell>
                            <TableCell align="center">{row.data.codigo}</TableCell>
                            <TableCell align="center">{row.data.idEmpresa}</TableCell>
                            <TableCell align="center">{row.data.idMotorista}</TableCell>
                            <TableCell align="center">{row.data.idVeiculo}</TableCell>
                            <TableCell align="center">{listaUF.find(x => x.value === row.data.uf).label}</TableCell>
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

export default VeiculoList;