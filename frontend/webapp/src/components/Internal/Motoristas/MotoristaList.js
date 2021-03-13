import React from "react";
import { NavLink } from "react-router-dom";
import { TableFooter, Button, Paper, TableRow, TableHead, TableContainer, TableCell, TableBody, Table } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import { Mail, WhatsApp } from "@material-ui/icons";
// import { DataGrid } from '@material-ui/data-grid';
import PropTypes from "prop-types";
import { novo } from "../../../common/constraints"
const recordUri = "/motorista"
// const columns = [
//     {
//         field: 'codigo', headerName: 'Nome', flex: 1, renderCell: (params) => (
//             <NavLink to={`${recordUri}/${params.value}`}>{params.row.nome}</NavLink>
//         )
//     },
//     {
//         field: 'apelido', headerName: 'Apelido', flex: 0.5
//     },
//     {
//         field: 'telefones', headerName: 'Telefone', flex: 0.5, renderCell: (params) => {
//             return (
//                 params.value.map((item, idx) => (
//                     <React.Fragment key={idx}><span>{idx === 0 || ", "}</span>
//                         {
//                             item.whatsApp ?
//                                 (<React.Fragment><a href={`https://api.whatsapp.com/send?phone=${item.numero}`}>{item.numero}</a> <WhatsApp></WhatsApp></React.Fragment>)
//                                 : <span>{item.numero}</span>
//                         }
//                     </React.Fragment>
//                 ))
//             )
//         }
//     },
//     {
//         field: 'emails', headerName: 'E-mail', flex: 0.5, renderCell: (params) => (
//             params.value.map((item, idx) => (
//                 <React.Fragment key={idx}>
//                     <span>{idx === 0 || ", "}</span>
//                     <a href={`mailto:${item.valor}`}>{item.valor}</a> <Mail></Mail>
//                 </React.Fragment>
//             ))
//         )
//     },
//     {
//         field: 'ativo', headerName: 'Ativo', flex: 0.3, valueGetter: (params) => (
//             params.row.ativo ? "Sim" : "Não"
//         )
//     },
// ]
const MotoristaList = (props) => {
    return (<React.Fragment>
        {/* { props.rows &&
            <DataGrid rows={props.rows} columns={columns} />
        }
        <p>{JSON.stringify(props.rows)}</p> */}
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
                {props.rows &&
                    <TableBody>

                        {props.rows.length > 0 || (
                            <TableRow>
                                <TableCell colSpan={5}>No data</TableCell>
                            </TableRow>
                        )}
                        {props.rows.map((row) => (
                            <TableRow key={row.codigo}>
                                <TableCell component="th" scope="row">
                                    <NavLink to={`${recordUri}/${row.codigo}`}>{row.nome}</NavLink>
                                </TableCell>
                                <TableCell align="center">{row.apelido}</TableCell>
                                <TableCell align="center">{row.telefones.map((item, idx) => (
                                    <React.Fragment key={idx}><span>{idx === 0 || ", "}</span>
                                        {
                                            item.whatsApp ?
                                                (<React.Fragment><a href={`https://api.whatsapp.com/send?phone=${item.numero}`}>{item.numero}</a> <WhatsApp></WhatsApp></React.Fragment>)
                                                : <span>{item.numero}</span>
                                        }
                                    </React.Fragment>
                                ))}</TableCell>
                                <TableCell align="center">{row.emails.map((item, idx) => (
                                    <React.Fragment key={idx}>
                                        <span>{idx === 0 || ", "}</span>
                                        <a href={`mailto:${item.valor}`}>{item.valor}</a> <Mail></Mail>
                                    </React.Fragment>
                                ))}</TableCell>
                                <TableCell align="center">{row.ativo ? "Sim" : "Não"}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                }
                <TableFooter>
                    <TableRow key={0}>
                        <TableCell colSpan={5}>
                            <Button color="inherit" component={RouterLink} to={`${recordUri}/${novo}`}>Incluir</Button>
                        </TableCell>
                    </TableRow>
                </TableFooter>
            </Table>
        </TableContainer>
    </React.Fragment>
    )
}

MotoristaList.propTypes = {
    rows: PropTypes.arrayOf(
        PropTypes.shape({
            codigo: PropTypes.string.isRequired,
            nome: PropTypes.string.isRequired,
            apelido: PropTypes.string.isRequired,
            cpf: PropTypes.string.isRequired,
            telefones: PropTypes.arrayOf(
                PropTypes.shape({
                    numero: PropTypes.string.isRequired,
                    tipo: PropTypes.string.isRequired,
                    whatsApp: PropTypes.bool.isRequired
                })
            ),
            emails: PropTypes.arrayOf(
                PropTypes.shape({
                    valor: PropTypes.string.isRequired,
                    tipo: PropTypes.string.isRequired
                })
            ),
            ativo: PropTypes.bool.isRequired,
        })
    )
}

export default MotoristaList;