import React, { useEffect, useState } from "react";
import { getCliente, saveCliente } from "../../../api/clientApi";
import ClientForm from "./ClientForm";
import { Paper, Container, makeStyles, Grid, Button } from "@material-ui/core";
import MessageStore from "../../Stores/MessageStore";

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

const ManageClientPage = (props) => {
  const [client, setClient] = useState({
    code: "",
    name: "",
    phone: "",
    alias: "",
  });

  const classes = useStyles();

  useEffect(() => {
    const id = props.match.params.id; // from the path;
    if (id) {
      getCliente(id).then((_course) => setClient(_course));
    }
  }, [props.match.params.id]);

  function handleChange({ target }) {
    setClient({ ...client, [target.name]: target.value });
  }

  function isValid() {
    return true;
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (!isValid) return;
    saveCliente(props.match.params.id, client)
      .then(() => {
        props.history.push("/clients");
      })
      .catch((reason) => {
        alert(reason);
      });
  }
  function handleCancel(event) {
    props.history.push("/clients");
  }

  return (
    <React.Fragment>
      <p>
        <Button
          onClick={() => {
            MessageStore.addMessage(new Date().toTimeString());
          }}
        >
          Adicionar Mensagem
        </Button>
      </p>
      <Grid
        container
        className={classes.root}
        alignItems="center"
        direction="column"
      >
        <Grid item xs={12} sm={10} md={8}>
          <Paper>
            <Container>
              <h1>Cliente</h1>
              <ClientForm
                client={client}
                onChange={handleChange}
                onSubmit={handleSubmit}
                onCancel={handleCancel}
              ></ClientForm>
            </Container>
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default ManageClientPage;
