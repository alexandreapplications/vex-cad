import React from "react";
import {
  Grid,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  Input,
  makeStyles,
  Button,
  TextField,
  MenuItem,
} from "@material-ui/core";
import Switch from '@material-ui/core/Switch';
import { listaUF, tipoVeiculos, tipoProd } from "../../../common/constraints"

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
            <InputLabel>Placa</InputLabel>
            <Input
              type="text"
              value={props.record.placa}
              name="placa"
              onChange={props.onChange}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.paper}>
          <FormControl fullWidth={true}>
            <InputLabel>Tara</InputLabel>
            <Input
              type="text"
              value={props.record.tara}
              name="tara"
              onChange={props.onChange}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.paper}>
          <FormControl fullWidth={true}>
            <TextField
              select
              label="Tipo Veiculo"
              type="text"
              value={props.record.tipoVeiculo}
              name="tipoVeiculo"
              onChange={props.onChange}
            >
              {tipoVeiculos.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.paper}>
          <FormControl fullWidth={true}>
            <TextField
              select
              label="Tipo Produto"
              type="text"
              value={props.record.tipoProd}
              name="tipoProd"
              onChange={props.onChange}
            >
              {tipoProd.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} className={classes.paper}>
          <FormControl fullWidth={true}>
            <TextField
              select
              label="UF"
              type="text"
              value={props.record.uf}
              name="uf"
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
