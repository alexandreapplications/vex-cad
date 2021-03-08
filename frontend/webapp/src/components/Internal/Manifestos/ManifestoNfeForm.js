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

function ManifestoNfeForm(props) {
    const classes = useStyles();

    return (
        <React.Fragment>
            <Grid container>
                <Grid item xs={8} sm={6} className={classes.paper}>
                    <FormControl fullWidth={true}>
                        <InputLabel>Chave NFE</InputLabel>
                        <Input
                            type="text"
                            value={props.record.chaveNFE}
                            name="chaveNFE"
                            onChange={props.onChange}
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={8} sm={6} className={classes.paper}>
                    <FormControl fullWidth={true}>
                        <InputLabel>Municipio</InputLabel>
                        <Input
                            type="text"
                            value={props.record.municipio}
                            name="codigo"
                            onChange={props.onChange}
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={8} sm={6} className={classes.paper}>
                    <FormControl fullWidth={true}>
                        <InputLabel>Valor</InputLabel>
                        <Input
                            type="text"
                            value={props.record.valorNFE}
                            name="valorNFE"
                            onChange={props.onChange}
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={8} sm={6} className={classes.paper}>
                    <FormControl fullWidth={true}>
                        <InputLabel>Peso NFE</InputLabel>
                        <Input
                            type="text"
                            value={props.record.usuario}
                            name="pesoNFE"
                            onChange={props.onChange}
                        />
                    </FormControl>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

export default ManifestoNfeForm;
