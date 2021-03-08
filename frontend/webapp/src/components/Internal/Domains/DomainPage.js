import React, { useEffect, useState } from "react";
import {
  getRecord,
  saveRecord,
  getRecordObserver,
} from "../../../api/domainApi";
import DomainForm from "./DomainForm";
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

const DomainPage = (props) => {
  const [domain, setDomain] = useState(null);

  const classes = useStyles();

  useEffect(() => {
    const id = props.match.params.id; // from the path;
    if (id) {
      getRecord(id).then((_record) => setDomain(_record));
      getRecordObserver(id, handleSourceChange);
    } else {
      setDomain({
        codigo: "",
        nome: "",
        apelido: "",
        email: "",
        senha: "",
        usuarios: []
      });
    }
  }, [props.match.params.id]);

  function handleSourceChange(doc) {
    setDomain(doc.data());
  }

  function handleChange({ target }) {
    setDomain({ ...domain, [target.name]: target.value });
  }

  function isValid() {
    return true;
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (!isValid) return;
    saveRecord(props.match.params.id, domain)
      .then(() => {
        props.history.push("/domains");
      })
      .catch((reason) => {
        alert(reason);
      });
  }
  function handleCancel(event) {
    props.history.push("/domains");
  }

  return (
    <React.Fragment>
      {domain && (
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
                  <h1>{props.match.params.id ? "Editar" : "Incluir"} Parametros</h1>
                  <DomainForm
                    domain={domain}
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                    onCancel={handleCancel}
                  ></DomainForm>
                </Container>
              </Paper>
            </Grid>
          </Grid>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default DomainPage;
