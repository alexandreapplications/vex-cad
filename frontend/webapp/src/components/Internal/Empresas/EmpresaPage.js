import React, { useEffect, useState } from "react";
import EmpresaForm from "./EmpresaForm";
import { Paper, Container, makeStyles, Grid } from "@material-ui/core";
import { hasLength, hasCNPJValid, hasEmailValid, isStringValid, isPreenchido, isWhatsappPhone, hasNovo } from "../../../common/utils"
import store from "../../Stores/EmpresaStore"

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
  const [errors, setErrors] = useState({});

  const classes = useStyles();

  const listUri = "/empresas"
  const novo = "novo";

  useEffect(() => {
    function onStoreDataChange(doc) {
      setRecord(doc);
    }

    if (props.match.params.id === novo) {
      setRecord(store.getEmptyRecord());
    } else {
      store.getRecord(props.match.params.id).then(doc => setRecord(doc)).catch(error => alert(error))
    }

    return () => {
      store.removeChangeListener(onStoreDataChange);
    }
  }, [props.match.params.id]);

  const handleBoolChange = (event) => {
    if (event.target.name.indexOf('.') < 0)
      setRecord({ ...record, [event.target.name]: event.target.checked });
    else {
      let campos = event.target.name.split('.');
      var newRecord = { ...record }
      var change = newRecord;
      for (var i = 0; i < campos.length - 1; i++) {
        change = change[campos[i]];
      }
      change[campos[campos.length - 1]] = event.target.checked;
      setRecord(newRecord);
    };
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
    const _errors = {};
    const _codigo = isPreenchido(record.codigo) /*|| isInteger(record.codigo)*/ || hasLength(record.codigo, 5) || hasNovo(record.codigo)
    if (_codigo) _errors.codigo = _codigo;

    const nome = isStringValid(record.nome, true, 10, 80);
    if (nome) _errors.nome = nome;

    const apelido = isStringValid(record.apelido, true, 3, 30);
    if (apelido) _errors.apelido = apelido;

    const cnpj = isPreenchido(record.cnpj); // || hasCNPJValid(record.cnpj);
    if (cnpj) _errors.cnpj = cnpj;

    var emailErrors = record.emails.map(element => {
      const valor = isPreenchido(element.valor) || hasEmailValid(element.valor);
      const tipo = isPreenchido(element.tipo);

      return {
        isValid: valor || tipo ? false : true,
        valor,
        tipo
      }
    });
    if (emailErrors.filter(x => !x.isValid).length > 0) {
      _errors.emails = emailErrors;
    }

    record.telefones.forEach(element => {
      if (!isWhatsappPhone(element.numero) && element.whatsApp)
        element.whatsApp = false;
    })
    var telefoneErrors = record.telefones.map(element => {
      const numero = isPreenchido(element.numero)
      const tipo = isPreenchido(element.tipo);

      return {
        isValid: numero || tipo ? false : true,
        numero,
        tipo
      }
    });
    if (telefoneErrors.filter(x => !x.isValid).length > 0) {
      _errors.telefones = telefoneErrors;
    }
    setErrors(_errors);
    // Form is valid;
    return Object.keys(_errors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!isValid()) return false;

    props.match.params.id === novo ? store.doAddRecord(record) : store.doUpdateRecord(record)
      .then(() => {
        props.history.push(listUri);
      })
      .catch((reason) => {
        alert(reason);
      });
  }

  function handleCancel() {
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
                    error={errors}
                    onChange={handleChange}
                    onBoolChange={handleBoolChange}
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
