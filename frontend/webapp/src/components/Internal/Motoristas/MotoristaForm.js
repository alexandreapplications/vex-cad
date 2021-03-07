import React from "react";
import {
  Grid,
  FormControl,
  InputLabel,
  Input,
  makeStyles,
  Button,
  FormGroup,
  FormControlLabel,
  Switch
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1),
  },
}));

function VeiculoForm(props) {
  const classes = useStyles();

  return (
    <form onSubmit={props.onSubmit}>
      <Grid container>
        <Grid item xs={8} sm={6} className={classes.paper}>
          <FormControl fullWidth={true}>
            <InputLabel>Código</InputLabel>
            <Input
              type="text"
              value={props.record.codigo}
              name="codigo"
              onChange={props.onChange}
            />
          </FormControl>
        </Grid>
        <Grid item xs={8} sm={6} className={classes.paper}>
          <FormGroup>
            <FormControlLabel label="Ativo" control={
              <Switch checked={props.record.ativo} name="ativo" color="primary" onChange={props.onBoolChange} />
            }>

            </FormControlLabel>
          </FormGroup>
        </Grid>
        <Grid item xs={12} className={classes.paper}>
          <FormControl fullWidth={true}>
            <InputLabel>Nome</InputLabel>
            <Input
              type="text"
              value={props.record.nome}
              name="nome"
              onChange={props.onChange}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.paper}>
          <FormControl fullWidth={true}>
            <InputLabel>Nome Fantasia</InputLabel>
            <Input
              type="text"
              value={props.record.apelido}
              name="apelido"
              onChange={props.onChange}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.paper}>
          <FormControl fullWidth={true}>
            <InputLabel>CPF</InputLabel>
            <Input
              type="text"
              value={props.record.cpf}
              name="cpf"
              onChange={props.onChange}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.paper}>
          <FormControl fullWidth={true}>
            <InputLabel>Telefone</InputLabel>
            <Input
              type="text"
              value={props.record.telefone}
              name="telefone"
              onChange={props.onChange}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.paper}>
          <FormControl fullWidth={true}>
            <InputLabel>Email</InputLabel>
            <Input
              type="text"
              value={props.record.email}
              name="email"
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

export default VeiculoForm;
