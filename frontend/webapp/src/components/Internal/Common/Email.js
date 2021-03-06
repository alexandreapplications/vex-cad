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

function Email(props) {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Grid item xs={12} lg={8} className={classes.paper}>
                <FormControl fullWidth={true}>
                    <InputLabel>Email</InputLabel>
                    <Input
                        type="text"
                        value={props.record.valor}
                        name={`${props.collectionName}.${props.idx}.valor`}
                        onChange={props.onChange}
                    />
                </FormControl>
            </Grid>
        </React.Fragment>
    )
}

export default Email;