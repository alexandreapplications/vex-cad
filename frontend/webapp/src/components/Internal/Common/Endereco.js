import React from "react";
import {
    Grid,
    FormControl,
    InputLabel,
    Input,
    makeStyles,
} from "@material-ui/core";

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
                <FormControl fullWidth={true}>
                    <InputLabel>Código IBGE</InputLabel>
                    <Input
                        type="text"
                        value={props.record.codibge}
                        name={`${props.collectionName}.${props.idx}.codibge`}
                        onChange={props.onChange}
                    />
                </FormControl>
            </Grid>
            <Grid item xs={6} sm={6} className={classes.paper}>
                <FormControl fullWidth={true}>
                    <InputLabel>CEP</InputLabel>
                    <Input
                        type="text"
                        value={props.record.cep}
                        name={`${props.collectionName}.${props.idx}.cep`}
                        onChange={props.onChange}
                    />
                </FormControl>
            </Grid>
            <Grid item xs={9} sm={8} className={classes.paper}>
                <FormControl fullWidth={true}>
                    <InputLabel>Logradouro</InputLabel>
                    <Input
                        type="text"
                        value={props.record.logradouro}
                        name={`${props.collectionName}.${props.idx}.logradouro`}
                        onChange={props.onChange}
                    />
                </FormControl>
            </Grid>
            <Grid item xs={3} sm={4} className={classes.paper}>
                <FormControl fullWidth={true}>
                    <InputLabel>Numero</InputLabel>
                    <Input
                        type="text"
                        value={props.record.numero}
                        name={`${props.collectionName}.${props.idx}.numero`}
                        onChange={props.onChange}
                    />
                </FormControl>
            </Grid>
            <Grid item xs={9} sm={8} className={classes.paper}>
                <FormControl fullWidth={true}>
                    <InputLabel>Complemento</InputLabel>
                    <Input
                        type="text"
                        value={props.record.complemento}
                        name={`${props.collectionName}.${props.idx}.complemento`}
                        onChange={props.onChange}
                    />
                </FormControl>
            </Grid>
            <Grid item xs={3} sm={4} className={classes.paper}>
                <FormControl fullWidth={true}>
                    <InputLabel>Bairro</InputLabel>
                    <Input
                        type="text"
                        value={props.record.bairro}
                        name={`${props.collectionName}.${props.idx}.bairro`}
                        onChange={props.onChange}
                    />
                </FormControl>
            </Grid>
            <Grid item xs={9} sm={8} className={classes.paper}>
                <FormControl fullWidth={true}>
                    <InputLabel>Cidade</InputLabel>
                    <Input
                        type="text"
                        value={props.record.cidade}
                        name={`${props.collectionName}.${props.idx}.cidade`}
                        onChange={props.onChange}
                    />
                </FormControl>
            </Grid>
            <Grid item xs={3} sm={4} className={classes.paper}>
                <FormControl fullWidth={true}>
                    <InputLabel>UF</InputLabel>
                    <Input
                        type="text"
                        value={props.record.uf}
                        name={`${props.collectionName}.${props.idx}.uf`}
                        onChange={props.onChange}
                    />
                </FormControl>
            </Grid>
        </React.Fragment>
    )
}

export default Endereco;