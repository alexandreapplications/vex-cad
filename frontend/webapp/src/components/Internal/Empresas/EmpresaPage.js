import React, { useEffect, useState } from "react";
import {
  getRecord,
  saveRecord,
  getRecordObserver,
} from "../../../api/empresaApi";
import EmpresaForm from "./EmpresaForm";
import { Paper, Container, makeStyles, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  grow: {
    flexGrow: 1,
  },
}));

const EmpresaPage = (props) => {
  const [record, setRecord] = useState(null);

  const classes = useStyles();

  const listUri = "/empresas"

  useEffect(() => {
    const id = props.match.params.id; // from the path;
    if (id) {
      getRecord("default", id).then((_record) => setRecord(_record));
      getRecordObserver("default", id, handleSourceChange);
    } else {
      setRecord({
        codigo: "",
        nome: "",
        apelido: "",
        cnpj: "",
        inscricao: "",
        enderecos: [{
          logradouro: "",
          numero: "",
          complemento: "",
          bairro: "",
          cidade: "",
          uf: "",
          cep: "",
          codibge: "",
        }],
        telefones: [{
          numero: "",
          tipo: "PR"
        }],
        emails: [{
          valor: "",
          tipo: "PR"
        }],
        regimeTibutario: "",
        tipoEmissao: "",
        dataContingencia: "",
        horaContingencia: "",
        tipoContingencia: "",
        sequenciaManifesto: 0,
        ativo: true
      });
    }
  }, [props.match.params.id]);

  function handleSourceChange(doc) {
    setRecord(doc.data());
  }

  function handleChange({ target }) {
    if (target.name.indexOf('.') < 0)
      setRecord({ ...record, [target.name]: target.value });
    else {
      let campos = target.name.split('.');
      var newRecord = { ...record }
      var change = newRecord;
      for (var i = 0; i < campos.length - 1; i++) {
        change = change[campos[i]];
      }
      change[campos[campos.length - 1]] = target.value;
      setRecord(newRecord);
    }
  }

  function isValid() {
    return true;
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (!isValid) return;
    saveRecord("default", props.match.params.id, record)
      .then(() => {
        props.history.push(listUri);
      })
      .catch((reason) => {
        alert(reason);
      });
  }
  function handleCancel(event) {
    props.history.push(listUri);
  }

  return (
    <React.Fragment>
      {record && (
        <React.Fragment>
          <Grid
            container
            className={classes.root}
            alignItems="center"
            direction="column"
          >
            <Grid item xs={12} sm={10} xl={8}>
              <Paper>
                <Container>
                  <h1>{props.match.params.id ? "Editar" : "Incluir"} Empresa</h1>
                  <EmpresaForm
                    record={record}
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                    onCancel={handleCancel}
                  ></EmpresaForm>
                </Container>
              </Paper>
            </Grid>
          </Grid>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default EmpresaPage;
