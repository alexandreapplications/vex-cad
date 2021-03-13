import React from "react";
import {
    Grid,
    FormControl,
    makeStyles,
    TextField,
    MenuItem,
} from "@material-ui/core";
import { listaUF } from "../../../common/constraints";

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(1),
    },
}));

function Endereco(props) {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Grid item xs={6} sm={6} className={classes.paper}>
                <TextField
                    type="text"
                    label="CEP"
                    value={props.record.cep}
                    name={`${props.collectionName}.${props.idx}.cep`}
                    fullWidth={true}
                    error={props.error.cep ? true : false}
                    onChange={props.onChange}
                    helperText={props.error.cep || "CEP da endereço"}
                />
            </Grid>
            <Grid item xs={6} sm={6} className={classes.paper}>
                <TextField
                    type="text"
                    label="Código IBGE"
                    value={props.record.codibge}
                    name={`${props.collectionName}.${props.idx}.codibge`}
                    fullWidth={true}
                    error={props.error.codibge ? true : false}
                    onChange={props.onChange}
                    helperText={props.error.codibge || "Código IBGE do endereço"}
                />
            </Grid>
            <Grid item xs={9} sm={8} className={classes.paper}>
                <TextField
                    type="text"
                    label="Logradouro"
                    value={props.record.logradouro}
                    name={`${props.collectionName}.${props.idx}.logradouro`}
                    fullWidth={true}
                    error={props.error.logradouro ? true : false}
                    onChange={props.onChange}
                    helperText={props.error.logradouro || "Rua / Avenida / Alameda / Praça "}
                />
            </Grid>
            <Grid item xs={3} sm={4} className={classes.paper}>
                <TextField
                    type="text"
                    label="Número"
                    value={props.record.numero}
                    name={`${props.collectionName}.${props.idx}.numero`}
                    fullWidth={true}
                    error={props.error.numero ? true : false}
                    onChange={props.onChange}
                    helperText={props.error.numero || "Número"}
                />
            </Grid>
            <Grid item xs={9} sm={8} className={classes.paper}>
                <TextField
                    type="text"
                    label="Complemento"
                    value={props.record.complemento}
                    name={`${props.collectionName}.${props.idx}.complemento`}
                    fullWidth={true}
                    error={props.error.complemento ? true : false}
                    onChange={props.onChange}
                    helperText={props.error.complemento || "Complemento do Endereço"}
                />
            </Grid>
            <Grid item xs={3} sm={4} className={classes.paper}>
                <TextField
                    type="text"
                    label="Bairro"
                    value={props.record.bairro}
                    name={`${props.collectionName}.${props.idx}.bairro`}
                    fullWidth={true}
                    error={props.error.bairro ? true : false}
                    onChange={props.onChange}
                    helperText={props.error.bairro || "Bairro"}
                />
            </Grid>
            <Grid item xs={9} sm={8} className={classes.paper}>
                <TextField
                    type="text"
                    label="Cidade"
                    value={props.record.cidade}
                    name={`${props.collectionName}.${props.idx}.cidade`}
                    fullWidth={true}
                    error={props.error.cidade ? true : false}
                    onChange={props.onChange}
                    helperText={props.error.cidade || "Cidade"}
                />
            </Grid>
            <Grid item xs={3} sm={4} className={classes.paper}>
                <FormControl fullWidth={true}>
                    <TextField
                        select
                        label="UF"
                        type="text"
                        value={props.record.uf}
                        name={`${props.collectionName}.${props.idx}.uf`}
                        onChange={props.onChange}
                    >
                        {listaUF.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </FormControl>

            </Grid>
        </React.Fragment>
    )
}

export default Endereco;