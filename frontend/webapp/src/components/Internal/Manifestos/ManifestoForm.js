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
  TableContainer, Table, TableHead, TableRow, TableCell, TableBody, TableFooter
} from "@material-ui/core";
import Switch from '@material-ui/core/Switch';
import { listaUF } from "../../../common/constraints"

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1),
  },
}));

function ManifestoForm(props) {
  const classes = useStyles();

  return (
    <form onSubmit={props.onSubmit}>
      <Grid container>
        <Grid item xs={5} className={classes.paper}>
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
        <Grid item xs={5} className={classes.paper}>
          <FormControl fullWidth={true}>
            <InputLabel>data</InputLabel>
            <Input
              type="text"
              value={props.record.data}
              name="data"
              onChange={props.onChange}
            />
          </FormControl>
        </Grid>
        <Grid item xs={2} className={classes.paper}>
          <FormGroup>
            <FormControlLabel label="Ativo" control={
              <Switch checked={props.record.ativo} name="ativo" color="primary" onChange={props.onBoolChange} />
            }>

            </FormControlLabel>
          </FormGroup>
        </Grid>
        <Grid item xs={12} className={classes.paper}>
          <FormControl fullWidth={true}>
            <TextField
              select
              label="Empresa"
              type="text"
              value={props.record.idEmpresa}
              name="idEmpresa"
              onChange={props.onChange}
            >
              {props.empresas.map((option) => (
                <MenuItem key={option.id} value={option.id}>
                  {option.data.nome}
                </MenuItem>
              ))}
            </TextField>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} lg={5} className={classes.paper}>
          <FormControl fullWidth={true}>
            <TextField
              select
              label="Motorista"
              type="text"
              value={props.record.idMotorista}
              name="idMotorista"
              onChange={props.onChange}
            >
              {props.motoristas.map((option) => (
                <MenuItem key={option.id} value={option.id}>
                  {option.data.nome}
                </MenuItem>
              ))}
            </TextField>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} lg={4} className={classes.paper}>
          <FormControl fullWidth={true}>
            <TextField
              select
              label="Veiculo"
              type="text"
              value={props.record.idVeiculo}
              name="idVeiculo"
              onChange={props.onChange}
            >
              {props.veiculos.map((option) => (
                <MenuItem key={option.id} value={option.id}>
                  {option.data.nome}
                </MenuItem>
              ))}
            </TextField>
          </FormControl>
        </Grid>

        <Grid item xs={8} sm={6} lg={3} className={classes.paper}>
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
        <Grid item xs={4} sm={4} className={classes.paper}>
          <FormControl fullWidth={true}>
            <InputLabel>Tipo Ambiente</InputLabel>
            <Input
              type="text"
              value={props.record.tpAmb}
              name="tpAmb"
              onChange={props.onChange}
            />
          </FormControl>
        </Grid>
        <Grid item xs={6} sm={4} className={classes.paper}>
          <FormControl fullWidth={true}>
            <InputLabel>Tipo Emitido</InputLabel>
            <Input
              type="text"
              value={props.record.tpEmit}
              name="tpEmit"
              onChange={props.onChange}
            />
          </FormControl>
        </Grid>
        <Grid item xs={6} sm={4} className={classes.paper}>
          <FormControl fullWidth={true}>
            <InputLabel>Modo</InputLabel>
            <Input
              type="text"
              value={props.record.mod}
              name="mod"
              onChange={props.onChange}
            />
          </FormControl>
        </Grid>
        <Grid item xs={6} sm={4} className={classes.paper}>
          <FormControl fullWidth={true}>
            <InputLabel>serie</InputLabel>
            <Input
              type="text"
              value={props.record.serie}
              name="serie"
              onChange={props.onChange}
            />
          </FormControl>
        </Grid>
        <Grid item xs={6} sm={4} className={classes.paper}>
          <FormControl fullWidth={true}>
            <InputLabel>cMDF</InputLabel>
            <Input
              type="text"
              value={props.record.cMDF}
              name="cMDF"
              onChange={props.onChange}
            />
          </FormControl>
        </Grid>
        <Grid item xs={6} sm={4} className={classes.paper}>
          <FormControl fullWidth={true}>
            <InputLabel>cDV</InputLabel>
            <Input
              type="text"
              value={props.record.cDV}
              name="cDV"
              onChange={props.onChange}
            />
          </FormControl>
        </Grid>
        <Grid item xs={6} sm={4} className={classes.paper}>
          <FormControl fullWidth={true}>
            <InputLabel>modal</InputLabel>
            <Input
              type="text"
              value={props.record.modal}
              name="modal"
              onChange={props.onChange}
            />
          </FormControl>
        </Grid>
        <Grid item xs={6} sm={4} className={classes.paper}>
          <FormControl fullWidth={true}>
            <InputLabel>tpEmis</InputLabel>
            <Input
              type="text"
              value={props.record.tpEmis}
              name="tpEmis"
              onChange={props.onChange}
            />
          </FormControl>
        </Grid>
        <Grid item xs={6} sm={4} className={classes.paper}>
          <FormControl fullWidth={true}>
            <InputLabel>procEmi</InputLabel>
            <Input
              type="text"
              value={props.record.procEmi}
              name="procEmi"
              onChange={props.onChange}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={4} className={classes.paper}>
          <FormControl fullWidth={true}>
            <InputLabel>verProc</InputLabel>
            <Input
              type="text"
              value={props.record.verProc}
              name="verProc"
              onChange={props.onChange}
            />
          </FormControl>
        </Grid>
        <Grid item xs={6} sm={4} className={classes.paper}>
          <FormControl fullWidth={true}>
            <TextField
              select
              label="ufIni"
              type="text"
              value={props.record.ufIni}
              name="ufIni"
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
        <Grid item xs={6} sm={4} className={classes.paper}>
          <FormControl fullWidth={true}>
            <TextField
              select
              label="ufFim"
              type="text"
              value={props.record.ufFim}
              name="ufFim"
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
        <Grid item xs={6} className={classes.paper}>
          <FormControl fullWidth={true}>
            <InputLabel>Mun Carrega</InputLabel>
            <Input
              type="text"
              value={props.record.munCarrega}
              name="munCarrega"
              onChange={props.onChange}
            />
          </FormControl>
        </Grid>
        <Grid item xs={6} className={classes.paper}>
          <FormControl fullWidth={true}>
            <InputLabel>xMunCarrega</InputLabel>
            <Input
              type="text"
              value={props.record.xMunCarrega}
              name="xMunCarrega"
              onChange={props.onChange}
            />
          </FormControl>
        </Grid>
        <Grid item xs={6} className={classes.paper}>
          <FormControl fullWidth={true}>
            <InputLabel>valorManifesto</InputLabel>
            <Input
              type="text"
              value={props.record.valorManifesto}
              name="valorManifesto"
              onChange={props.onChange}
            />
          </FormControl>
        </Grid>
        <Grid item xs={6} className={classes.paper}>
          <FormControl fullWidth={true}>
            <InputLabel>pesoManifesto</InputLabel>
            <Input
              type="text"
              value={props.record.pesoManifesto}
              name="pesoManifesto"
              onChange={props.onChange}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} className={classes.paper}>
          <FormControl fullWidth={true}>
            <InputLabel>chaveMDFe</InputLabel>
            <Input
              type="text"
              value={props.record.chaveMDFe}
              name="chaveMDFe"
              onChange={props.onChange}
            />
          </FormControl>
        </Grid>
        <Grid item xs={6} className={classes.paper}>
          <FormControl fullWidth={true}>
            <InputLabel>sequenciaNFe</InputLabel>
            <Input
              type="text"
              value={props.record.sequenciaNFe}
              name="sequenciaNFe"
              onChange={props.onChange}
            />
          </FormControl>
        </Grid>
        <Grid item xs={6} className={classes.paper}>
          <FormControl fullWidth={true}>
            <InputLabel>protocloloMDFe</InputLabel>
            <Input
              type="text"
              value={props.record.protocloloMDFe}
              name="protocloloMDFe"
              onChange={props.onChange}
            />
          </FormControl>
        </Grid>
        <Grid item xs={8} sm={6} className={classes.paper}>
          <FormControl fullWidth={true}>
            <InputLabel>usuario</InputLabel>
            <Input
              type="text"
              value={props.record.usuario}
              name="usuario"
              onChange={props.onChange}
            />
          </FormControl>
        </Grid>

        <TableContainer>
          <Table aria-label="Lista dos manifestos" stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell>Ord</TableCell>
                <TableCell>Chave NFE</TableCell>
                <TableCell align="center">Municipio</TableCell>
                <TableCell align="center">Valor</TableCell>
                <TableCell align="center">Peso</TableCell>
                <TableCell align="center">+</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.record.notasFiscais.length > 0 || (
                <TableRow key={0}>
                  <TableCell colSpan={6}>Nenhuma Nota</TableCell>
                </TableRow>
              )}
              {
                props.record.notasFiscais.map((nf, idx) => (
                  <TableRow key={idx}>
                    <TableCell>
                      {idx + 1}
                    </TableCell>
                    <TableCell>
                      <Input
                        type="text"
                        value={nf.chave}
                        name={`notasFiscais.${idx}.chave`}
                        onChange={props.onChange}
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        type="text"
                        value={nf.codMunicipio}
                        name={`notasFiscais.${idx}.codMunicipio`}
                        onChange={props.onChange}
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        type="text"
                        value={nf.valor}
                        name={`notasFiscais.${idx}.valor`}
                        onChange={props.onChange}
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        type="text"
                        value={nf.peso}
                        name={`notasFiscais.${idx}.peso`}
                        onChange={props.onChange}
                      />
                    </TableCell>
                    <TableCell>
                      <Button type="button" onClick={props.onAddNFE}>
                        -
                 </Button>
                    </TableCell>
                  </TableRow>
                ))
              }
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell>---</TableCell>
                <TableCell>
                  <Input
                    type="text"
                    value={props.newNFE.chave}
                    name="chave"
                    onChange={props.onNewNFEChange}
                  />
                </TableCell>
                <TableCell>
                  <Input
                    type="text"
                    value={props.newNFE.codMunicipio}
                    name="codMunicipio"
                    onChange={props.onNewNFEChange}
                  />
                </TableCell>
                <TableCell>
                  <Input
                    type="text"
                    value={props.newNFE.valor}
                    name="valor"
                    onChange={props.onNewNFEChange}
                  />
                </TableCell>
                <TableCell>
                  <Input
                    type="text"
                    value={props.newNFE.peso}
                    name="peso"
                    onChange={props.onNewNFEChange}
                  />
                </TableCell>
                <TableCell>
                  <Button type="button" onClick={props.onAddNFE}>
                    +
                 </Button>
                </TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
        <Grid item xs={12} className={classes.paper}></Grid>
        <Grid item xs={12} className={classes.paper}>
          <Button type="submit" color="primary">
            Enviar
        </Button>
          <Button type="button" onClick={props.onCancel}>
            Cancelar
        </Button>
        </Grid>
      </Grid>
    </form >
  );
}

export default ManifestoForm;
