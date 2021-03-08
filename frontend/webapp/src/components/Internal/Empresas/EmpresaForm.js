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
  Switch,
} from "@material-ui/core";
import Endereco from "../Common/Endereco";
import Email from "../Common/Email";
import Telefone from "../Common/Telefone";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1),
  },
}));

function EmpresaForm(props) {
  const classes = useStyles();

  return (
    <form onSubmit={props.onSubmit}>
      <Grid container>
        <Grid item xs={4} sm={4} className={classes.paper}>
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
        <Grid item xs={6} sm={6} className={classes.paper}>
          <FormControl fullWidth={true}>
            <InputLabel>CNPJ</InputLabel>
            <Input
              type="text"
              value={props.record.cnpj}
              name="cnpj"
              onChange={props.onChange}
            />
          </FormControl>
        </Grid>
        <Grid item xs={2} sm={2} className={classes.paper}>
          <FormGroup>
            <FormControlLabel label="Ativo" control={
              <Switch checked={props.record.ativo} name="ativo" color="primary" onChange={props.onBoolChange} />
            }>

            </FormControlLabel>
          </FormGroup>
        </Grid>
        <Grid item xs={12} lg={6} className={classes.paper}>
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
        <Grid item xs={12} lg={6} className={classes.paper}>
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
        <Grid item xs={12} sm={12} className={classes.paper}>
        </Grid>
        {

          props.record.emails.map((item, idx) => (
            <Email record={item} collectionName="emails" key={idx} idx={idx} onChange={props.onChange}></Email>
          ))
        }
        <Grid item xs={12} sm={12} className={classes.paper}>
        </Grid>
        {
          props.record.telefones.map((item, idx) => (
            <Telefone record={item} collectionName="telefones" key={idx} idx={idx} onChange={props.onChange}></Telefone>
          ))
        }
        <Grid item xs={12} sm={12} className={classes.paper}>
        </Grid>
        {
          props.record.enderecos.map((item, idx) => (
            <Endereco record={item} collectionName="enderecos" key={idx} idx={idx} onChange={props.onChange}></Endereco>
          ))
        }
        <Grid item xs={12} sm={12} className={classes.paper}>
        </Grid>

        <Grid item xs={8} sm={8} lg={4} className={classes.paper}>
          <FormControl fullWidth={true}>
            <InputLabel>Inscrição</InputLabel>
            <Input
              type="text"
              value={props.record.inscricao}
              name="inscricao"
              onChange={props.onChange}
            />
          </FormControl>
        </Grid>
        <Grid item xs={4} sm={4} lg={4} className={classes.paper}>
          <FormControl fullWidth={true}>
            <InputLabel>Regime Tributário</InputLabel>
            <Input
              type="text"
              value={props.record.regimeTibutario}
              name="regimeTibutario"
              onChange={props.onChange}
            />
          </FormControl>
        </Grid>
        <Grid item xs={8} sm={6} lg={4} className={classes.paper}>
          <FormControl fullWidth={true}>
            <InputLabel>Tipo Emissão</InputLabel>
            <Input
              type="text"
              value={props.record.tipoEmissao}
              name="tipoEmissao"
              onChange={props.onChange}
            />
          </FormControl>
        </Grid>
        <Grid item xs={4} sm={6} lg={3} className={classes.paper}>
          <FormControl fullWidth={true}>
            <InputLabel>Tipo Contingência</InputLabel>
            <Input
              type="text"
              value={props.record.tipoContingencia}
              name="tipoContingencia"
              onChange={props.onChange}
            />
          </FormControl>
        </Grid>
        <Grid item xs={8} sm={6} lg={3} className={classes.paper}>
          <FormControl fullWidth={true}>
            <InputLabel>Data Contingência</InputLabel>
            <Input
              type="text"
              value={props.record.dataContingencia}
              name="dataContingencia"
              onChange={props.onChange}
            />
          </FormControl>
        </Grid>
        <Grid item xs={4} sm={6} lg={3} className={classes.paper}>
          <FormControl fullWidth={true}>
            <InputLabel>Hora Contingência</InputLabel>
            <Input
              type="text"
              value={props.record.horaContingencia}
              name="horaContingencia"
              onChange={props.onChange}
            />
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6} lg={3} className={classes.paper}>
          <FormControl fullWidth={true}>
            <InputLabel>Sequência</InputLabel>
            <Input
              type="number"
              value={props.record.sequenciaManifesto}
              name="sequenciaManifesto"
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

export default EmpresaForm;
