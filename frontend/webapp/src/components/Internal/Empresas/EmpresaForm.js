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
import { tipoEmail, tipoTelefone, tipoUsuario } from "../../../common/constraints";
import { isWhatsappPhone } from "../../../common/utils";
import Endereco from "../Common/Endereco";

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
            label="CNPJ"
            value={props.record.cnpj}
            name="cnpj"
            fullWidth={true}
            error={props.error.cnpj ? true : false}
            onChange={props.onChange}
            helperText={props.error.cnpj || "CNPJ do Motorista"}
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
        <Grid item xs={12} sm={12} className={classes.paper}>
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
                  error={props.error.emails && props.error.emails[idx].tipo ? true : false}
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
                  value={item.numero}
                  name={`telefones.${idx}.numero`}
                  fullWidth={true}
                  error={props.error.telefones && props.error.telefones[idx].numero ? true : false}
                  onChange={props.onChange}
                  helperText={(props.error.telefones && props.error.telefones[idx].numero) || "Telefone do Motorista"}
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
                  error={props.error.telefones && props.error.telefones[idx].tipo ? true : false}
                  onChange={props.onChange}
                  helperText={(props.error.telefones && props.error.telefones[idx].tipo) || "Tipo Telefone"}
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
                    <Switch checked={item.whatsApp} disabled={!isWhatsappPhone(item.numero)} name={`telefones.${idx}.whatsApp`} color="primary" onChange={props.onBoolChange} />
                  }>
                  </FormControlLabel>
                </FormGroup>
              </Grid>
            </React.Fragment>
          ))
        }
        <Grid item xs={12} sm={12} className={classes.paper}>
        </Grid>
        {
          props.record.enderecos.map((item, idx) => (
            <Endereco record={item} collectionName="enderecos" key={idx} idx={idx} error={props.error && props.error.enderecos && props.error.enderecos[idx] ? props.error.enderecos[idx] : {}} onChange={props.onChange}></Endereco>
          ))
        }
        <Grid item xs={12} sm={12} className={classes.paper}>
        </Grid>
        {
          props.record.usuarios.map((item, idx) => (
            <React.Fragment key={idx}>
              <Grid item xs={6} sm={4} className={classes.paper}>
                <TextField
                  type="text"
                  label="E-mail"
                  value={item.email}
                  name={`usuarios.${idx}.email`}
                  fullWidth={true}
                  error={props.error.usuarios && props.error.usuarios[idx].email ? true : false}
                  onChange={props.onChange}
                  helperText={(props.error.emails && props.error.usuarios[idx].email) || "E-mail do Usuário"}
                />
              </Grid>
              <Grid item xs={6} sm={4} className={classes.paper}>
                <TextField
                  type="text"
                  label="Nome"
                  value={item.nome}
                  name={`usuarios.${idx}.nome`}
                  fullWidth={true}
                  error={props.error.usuarios && props.error.usuarios[idx].nome ? true : false}
                  onChange={props.onChange}
                  helperText={(props.error.emails && props.error.usuarios[idx].nome) || "Nome do Usuário"}
                />
              </Grid>
              <Grid item xs={10} sm={4} className={classes.paper}>
                <TextField
                  select
                  label="Tipo"
                  type="text"
                  value={item.tipo}
                  name={`usuarios.${idx}.tipo`}
                  fullWidth={true}
                  error={props.error.usuarios && props.error.usuarios[idx].tipo ? true : false}
                  onChange={props.onChange}
                  helperText="Tipo do Usuário"
                >
                  {tipoUsuario.map((option) => (
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
        <Grid item xs={8} sm={8} lg={4} className={classes.paper}>
          <TextField
            type="text"
            label="Inscrição"
            value={props.record.inscricao}
            name="inscricao"
            fullWidth={true}
            error={props.error.inscricao ? true : false}
            onChange={props.onChange}
            helperText={props.error.inscricao || "Inscrição da empresa"}
          />
        </Grid>
        <Grid item xs={4} sm={4} lg={4} className={classes.paper}>
          <TextField
            type="text"
            label="Regime Tributário"
            value={props.record.regimeTibutario}
            name="regimeTibutario"
            fullWidth={true}
            error={props.error.regimeTibutario ? true : false}
            onChange={props.onChange}
            helperText={props.error.regimeTibutario || "Regime Tributário da empresa"}
          />
        </Grid>
        <Grid item xs={8} sm={6} lg={4} className={classes.paper}>
          <TextField
            type="text"
            label="Tipo Emissão"
            value={props.record.tipoEmissao}
            name="tipoEmissao"
            fullWidth={true}
            error={props.error.tipoEmissao ? true : false}
            onChange={props.onChange}
            helperText={props.error.tipoEmissao || "Tipo Emissão da empresa"}
          />
        </Grid>
        <Grid item xs={4} sm={6} lg={3} className={classes.paper}>
          <TextField
            type="text"
            label="Tipo Contingência"
            value={props.record.tipoContingencia}
            name="tipoContingencia"
            fullWidth={true}
            error={props.error.tipoContingencia ? true : false}
            onChange={props.onChange}
            helperText={props.error.tipoContingencia || "DESCREVER"}
          />
        </Grid>
        <Grid item xs={8} sm={6} lg={3} className={classes.paper}>
          <TextField
            type="text"
            label="Data Contingência"
            value={props.record.dataContingencia}
            name="dataContingencia"
            fullWidth={true}
            error={props.error.dataContingencia ? true : false}
            onChange={props.onChange}
            helperText={props.error.dataContingencia || "DESCREVER"}
          />
        </Grid>
        <Grid item xs={4} sm={6} lg={3} className={classes.paper}>
          <TextField
            type="text"
            label="Hora Contingência"
            value={props.record.horaContingencia}
            name="horaContingencia"
            fullWidth={true}
            error={props.error.horaContingencia ? true : false}
            onChange={props.onChange}
            helperText={props.error.horaContingencia || "DESCREVER"}
          />
        </Grid>
        <Grid item xs={12} sm={6} lg={3} className={classes.paper}>
          <TextField
            type="text"
            label="Sequência"
            value={props.record.sequenciaManifesto}
            name="sequenciaManifesto"
            fullWidth={true}
            error={props.error.sequenciaManifesto ? true : false}
            onChange={props.onChange}
            helperText={props.error.sequenciaManifesto || "Sequência de emissão de manifesto"}
          />
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
