import React, { useEffect, useState } from "react";
import {
  getRecord,
  saveRecord,
  getRecordObserver,
} from "../../../api/veiculoApi";
import VeiculoForm from "./VeiculoForm";
import { Paper, Container, makeStyles, Grid } from "@material-ui/core";
import { hasLength, isPreenchido, isStringValid, hasPlacaValida, isInteger } from "../../../common/utils";

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

const VeiculoPage = (props) => {
  const [record, setRecord] = useState(null);
  const [errors, setErrors] = useState({});

  const classes = useStyles();

  const listUri = "/veiculos"

  useEffect(() => {
    const id = props.match.params.id; // from the path;
    if (id) {
      getRecord("default", id).then((_record) => setRecord(_record));
      getRecordObserver("default", id, handleSourceChange);
    } else {
      setRecord({
        codigo: "",
        ativo: true,
        nome: "",
        placa: "",
        tara: "",
        tipoProd: "",
        tipoVeiculo: "",
        uf: ""
      });
    }
  }, [props.match.params.id]);

  function handleSourceChange(doc) {
    setRecord(doc.data());
  }

  const handleBoolChange = (event) => {
    setRecord({ ...record, [event.target.name]: event.target.checked });
  };

  function handleChange({ target }) {
    setRecord({ ...record, [target.name]: target.value });
  }


  function isValid() {
    const _errors = {};

    const codigo = isPreenchido(record.codigo) /*|| isInteger(record.codigo)*/ || hasLength(record.codigo, 5)
    if (codigo) _errors.codigo = codigo;

    const nome = isStringValid(record.nome, true, 10, 80);
    if (nome) _errors.nome = nome;

    const placa = isPreenchido(record.placa) || hasPlacaValida(record.placa)
    if (placa) _errors.placa = placa;

    const tara = isPreenchido(record.tara) || isInteger(record.tara)
    if (tara) _errors.tara = tara;

    setErrors(_errors);
    // Form is valid;
    return Object.keys(_errors).length === 0;
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
            <Grid item xs={12} sm={10} md={8}>
              <Paper>
                <Container>
                  <h1>{props.match.params.id ? "Editar" : "Incluir"} Veículo</h1>
                  <VeiculoForm
                    record={record}
                    error={errors}
                    onChange={handleChange}
                    onBoolChange={handleBoolChange}
                    onSubmit={handleSubmit}
                    onCancel={handleCancel}
                  ></VeiculoForm>
                </Container>
              </Paper>
            </Grid>
          </Grid>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default VeiculoPage;
