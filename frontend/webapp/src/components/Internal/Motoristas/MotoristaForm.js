import React from "react";
import {
  Grid,
  makeStyles,
  Button,
  FormGroup,
  FormControlLabel,
  Switch,
  TextField,
  MenuItem,
} from "@material-ui/core";
import { tipoEmail, tipoTelefone } from "../../../common/constraints"


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
          <TextField
            type="text"
            label="Código"
            value={props.record.codigo}
            name="codigo"
            fullWidth={true}
            error={props.error.codigo ? true : false}
            onChange={props.onChange}
            helperText={props.error.codigo || "Código do Motorista"}
          />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.paper}>
          <TextField
            type="text"
            label="CPF"
            value={props.record.cpf}
            name="cpf"
            fullWidth={true}
            error={props.error.cpf ? true : false}
            onChange={props.onChange}
            helperText={props.error.cpf || "CPF do Motorista"}
          />
        </Grid>
        <Grid item xs={8} sm={2} className={classes.paper}>
          <FormGroup>
            <FormControlLabel label="Ativo" control={
              <Switch checked={props.record.ativo} name="ativo" color="primary" onChange={props.onBoolChange} />
            }>
            </FormControlLabel>
          </FormGroup>
        </Grid>
        <Grid item xs={12} sm={8} className={classes.paper}>
          <TextField
            type="text"
            label="Nome"
            value={props.record.nome}
            name="nome"
            fullWidth={true}
            error={props.error.nome ? true : false}
            onChange={props.onChange}
            helperText={props.error.nome || "Código do Motorista"}
          />
        </Grid>
        <Grid item xs={12} sm={4} className={classes.paper}>
          <TextField
            type="text"
            label="Nome resumido"
            value={props.record.apelido}
            name="apelido"
            fullWidth={true}
            error={props.error.apelido ? true : false}
            onChange={props.onChange}
            helperText={props.error.apelido || "Nome resumido do Motorista"}
          />
        </Grid>
        {
          props.record.emails.map((item, idx) => (
            <React.Fragment key={idx}>
              <Grid item xs={12} sm={8} className={classes.paper}>
                <TextField
                  type="text"
                  label="E-mail"
                  value={item.valor}
                  name={`emails.${idx}.valor`}
                  fullWidth={true}
                  error={props.error.emails && props.error.emails[idx].valor ? true : false}
                  onChange={props.onChange}
                  helperText={(props.error.emails && props.error.emails[idx].valor) || "E-mail do Motorista"}
                />
              </Grid>
              <Grid item xs={10} sm={4} className={classes.paper}>
                <TextField
                  select
                  label="Tipo"
                  type="text"
                  value={item.tipo}
                  name={`emails.${idx}.tipo`}
                  fullWidth={true}
                  error={props.error.email && props.error.emails[idx].tipo ? true : false}
                  onChange={props.onChange}
                  helperText="Tipo Email"
                >
                  {tipoEmail.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
            </React.Fragment>

          ))
        }
        <Grid item xs={12} sm={12} className={classes.paper}>
        </Grid>
        {
          props.record.telefones.map((item, idx) => (
            <React.Fragment key={idx}>
              <Grid item xs={12} sm={6} className={classes.paper}>
                <TextField
                  type="text"
                  label="Telefone"
                  value={item.valor}
                  name={`telefones.${idx}.numero`}
                  fullWidth={true}
                  error={props.error.apelido ? true : false}
                  onChange={props.onChange}
                  helperText={props.error.apelido || "Telefone do Motorista"}
                />
              </Grid>
              <Grid item xs={8} sm={4} className={classes.paper}>
                <TextField
                  select
                  label="Tipo"
                  type="text"
                  value={item.tipo}
                  name={`telefones.${idx}.tipo`}
                  fullWidth={true}
                  onChange={props.onChange}
                  helperText="Tipo Telefone"
                >
                  {tipoTelefone.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={4} sm={2} className={classes.paper}>
                <FormGroup>
                  <FormControlLabel label="Whatsapp" control={
                    <Switch checked={item.whatsApp} name={`telefones.${idx}.whatsApp`} color="primary" onChange={props.onBoolChange} />
                  }>
                  </FormControlLabel>
                </FormGroup>
              </Grid>
            </React.Fragment>

          ))
        }
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
