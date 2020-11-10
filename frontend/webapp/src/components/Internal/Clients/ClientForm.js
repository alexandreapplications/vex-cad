import React from "react";
import {
  Grid,
  FormControl,
  InputLabel,
  Input,
  makeStyles,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1),
  },
}));

function ClientForm(props) {
  const classes = useStyles();

  return (
    <form onSubmit={props.onSubmit}>
      <Grid container>
        <Grid item xs={8} sm={6} className={classes.paper}>
          <FormControl fullWidth={true}>
            <InputLabel>Código</InputLabel>
            <Input
              type="text"
              value={props.client.code}
              name="code"
              onChange={props.onChange}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} className={classes.paper}>
          <FormControl fullWidth={true}>
            <InputLabel>Nome</InputLabel>
            <Input
              type="text"
              value={props.client.name}
              name="name"
              onChange={props.onChange}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.paper}>
          <FormControl fullWidth={true}>
            <InputLabel>Telefone</InputLabel>
            <Input
              type="text"
              value={props.client.phone}
              name="phone"
              onChange={props.onChange}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.paper}>
          <FormControl fullWidth={true}>
            <InputLabel>Apelido</InputLabel>
            <Input
              type="text"
              value={props.client.alias}
              name="alias"
              onChange={props.onChange}
            />
          </FormControl>
        </Grid>
      </Grid>
      <Grid item xs={12} className={classes.paper}>
        <Button type="submit" color="primary">
          Enviar
        </Button>
        <Button type="button" onClick={props.onCancel}>
          Cancelar
        </Button>
      </Grid>
    </form>
  );
}

export default ClientForm;
