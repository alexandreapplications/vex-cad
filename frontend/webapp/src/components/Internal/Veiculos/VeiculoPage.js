import React, { useEffect, useState } from "react";
import {
  getRecord,
  saveRecord,
  getRecordObserver,
} from "../../../api/veiculoApi";
import VeiculoForm from "./VeiculoForm";
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

const VeiculoPage = (props) => {
  const [record, setRecord] = useState(null);

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
            <Grid item xs={12} sm={10} md={8}>
              <Paper>
                <Container>
                  <h1>Veiculo</h1>
                  <VeiculoForm
                    record={record}
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
