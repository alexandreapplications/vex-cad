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
            <Grid item xs={12} sm={6} className={classes.paper}>
                <FormControl fullWidth={true}>
                    <InputLabel>Logradouro</InputLabel>
                    <Input
                        type="text"
                        value={props.record.logradouro}
                        name={`enderecos.${props.idx}.logradouro`}
                        onChange={props.onChange}
                    />
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} className={classes.paper}>
                <FormControl fullWidth={true}>
                    <InputLabel>Numero</InputLabel>
                    <Input
                        type="text"
                        value={props.record.numero}
                        name={`numero,${props.idx}`}
                        onChange={props.onChange}
                    />
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} className={classes.paper}>
                <FormControl fullWidth={true}>
                    <InputLabel>complemento</InputLabel>
                    <Input
                        type="text"
                        value={props.record.complemento}
                        name={`complemento,${props.idx}`}
                        onChange={props.onChange}
                    />
                </FormControl>
            </Grid>
            <Grid item xs={12} sm={6} className={classes.paper}>
                <FormControl fullWidth={true}>
                    <InputLabel>Bairro</InputLabel>
                    <Input
                        type="text"
                        value={props.record.bairro}
                        name={`bairro,${props.idx}`}
                        onChange={props.onChange}
                    />
                </FormControl>
            </Grid><Grid item xs={12} sm={6} className={classes.paper}>
                <FormControl fullWidth={true}>
                    <InputLabel>Cidade</InputLabel>
                    <Input
                        type="text"
                        value={props.record.cidade}
                        name={`cidade,${props.idx}`}
                        onChange={props.onChange}
                    />
                </FormControl>
            </Grid><Grid item xs={12} sm={6} className={classes.paper}>
                <FormControl fullWidth={true}>
                    <InputLabel>UF</InputLabel>
                    <Input
                        type="text"
                        value={props.record.uf}
                        name={`uf,${props.idx}`}
                        onChange={props.onChange}
                    />
                </FormControl>
            </Grid><Grid item xs={12} sm={6} className={classes.paper}>
                <FormControl fullWidth={true}>
                    <InputLabel>Numero</InputLabel>
                    <Input
                        type="text"
                        value={props.record.numero}
                        name={`numero,${props.idx}`}
                        onChange={props.onChange}
                    />
                </FormControl>
            </Grid><Grid item xs={12} sm={6} className={classes.paper}>
                <FormControl fullWidth={true}>
                    <InputLabel>Código IBGE</InputLabel>
                    <Input
                        type="text"
                        value={props.record.codibge}
                        name={`codibge,${props.idx}`}
                        onChange={props.onChange}
                    />
                </FormControl>
            </Grid>
        </React.Fragment>
    )
}

export default Endereco;