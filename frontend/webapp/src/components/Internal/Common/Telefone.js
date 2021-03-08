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

function Telefone(props) {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Grid item xs={6} sm={6} lg={4} className={classes.paper}>
                <FormControl fullWidth={true}>
                    <InputLabel>Telefone</InputLabel>
                    <Input
                        type="text"
                        value={props.record.numero}
                        name={`${props.collectionName}.${props.idx}.numero`}
                        onChange={props.onChange}
                    />
                </FormControl>
            </Grid>
        </React.Fragment>
    )
}

export default Telefone;