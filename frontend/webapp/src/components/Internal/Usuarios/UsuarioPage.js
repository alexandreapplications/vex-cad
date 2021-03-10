import React, { useEffect, useState } from "react";
import {
  getRecord,
  saveRecord,
  getRecordObserver,
} from "../../../api/usuarioApi";
import MotoristaForm from "./UsuarioForm";
import { Paper, Container, makeStyles, Grid } from "@material-ui/core";
import { hasLength, hasCPFValid, hasEmailValid, isStringValid, isPreenchido, isWhatsappPhone } from "../../../common/utils"

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

const UsuarioPage = (props) => {
  const [record, setRecord] = useState(null);
  const [errors, setErrors] = useState({});

  const classes = useStyles();

  const listUri = "/usuarios"

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
        cpf: "",
        telefones: [{
          numero: "",
          tipo: "CELCOM",
          whatsApp: false
        }],
        emails: [{
          valor: "",
          tipo: "PR"
        }],
        ativo: true
      });
    }
  }, [props.match.params.id]);

  function handleSourceChange(doc) {
    setRecord(doc.data());
  }
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

  function handleAddEmail() {
    let newRecord = { ...record }
    newRecord.emails.push({
      valor: "",
      tipo: "PR"
    });
    setRecord(newRecord);
  }

  function handleRemoveEmail({ target }) {
    let newRecord = { ...record }
    newRecord.emails.splice(0, 1)
    setRecord(newRecord);
  }

  function isValid() {
    const _errors = {};
    const codigo = isPreenchido(record.codigo) /*|| isInteger(record.codigo)*/ || hasLength(record.codigo, 5)
    if (codigo) _errors.codigo = codigo;

    const nome = isStringValid(record.nome, true, 10, 80);
    if (nome) _errors.nome = nome;

    const apelido = isStringValid(record.apelido, true, 3, 30);
    if (apelido) _errors.apelido = apelido;

    const cpf = isPreenchido(record.cpf) || hasCPFValid(record.cpf);
    if (cpf) _errors.cpf = cpf;

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
                  <h1>{props.match.params.id ? "Editar" : "Incluir"} Usuario</h1>
                  <MotoristaForm
                    record={record}
                    error={errors}
                    onChange={handleChange}
                    onBoolChange={handleBoolChange}
                    onSubmit={handleSubmit}
                    onCancel={handleCancel}
                    doAddEmail={handleAddEmail}
                    doRemoveEmail={handleRemoveEmail}
                  ></MotoristaForm>
                </Container>
              </Paper>
            </Grid>
          </Grid>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default UsuarioPage;
