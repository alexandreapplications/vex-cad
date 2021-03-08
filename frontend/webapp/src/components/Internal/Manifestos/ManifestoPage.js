import React, { useEffect, useState } from "react";
import {
  getRecord,
  saveRecord,
  getRecordObserver,
} from "../../../api/manifestoApi";
import ManifestoForm from "./ManifestoForm";
import { Paper, Container, makeStyles, Grid } from "@material-ui/core";
import { manageRecordList } from "../../../api/commonApi"
import empresaStore from "../../Stores/EmpresaStore"
import motoristaStore from "../../Stores/MotoristaStore"
import veiculoStore from "../../Stores/VeiculoStore"

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

const ManifestoPage = (props) => {
  const [record, setRecord] = useState(null);
  const [empresas, setEmpresas] = useState(empresaStore.getRecords());
  const [motoristas, setMotoristas] = useState(motoristaStore.getRecords());
  const [veiculos, setVeiculos] = useState(veiculoStore.getRecords());

  const emptyNFE = () => (
    {
      chave: "",
      codMunicipio: "",
      valor: "",
      peso: ""
    }
  )
  const [newNFE, setNewNFE] = useState(emptyNFE())

  function handleNewNFEChange({ target }) {
    setNewNFE({ ...newNFE, [target.name]: target.value });
  }

  const classes = useStyles();
  const listUri = "/manifestos"

  useEffect(() => {
    function onEmpresasChange(doc) {
      setEmpresas(manageRecordList(doc));
    }
    function onMotoristasChange(doc) {
      setMotoristas(manageRecordList(doc));
    }
    function onVeiculosChange(doc) {
      setVeiculos(manageRecordList(doc));
    }
    const id = props.match.params.id; // from the path;
    if (id) {
      getRecord("default", id).then((_record) => setRecord(_record));
      getRecordObserver("default", id, handleSourceChange);
    } else {
      setRecord({
        codigo: "",
        ativo: true,
        data: "",
        idEmpresa: "",
        idMotorista: "",
        idVeiculo: "",
        idUsuario: "",
        uf: "",
        tpAmb: 0,
        tpEmit: 0,
        mod: "",
        serie: 0,
        cMDF: "",
        cDV: 0,
        modal: 0,
        tpEmis: 0,
        procEmi: 0,
        verProc: "",
        ufIni: "",
        ufFim: "",
        munCarrega: 0,
        xMunCarrega: "",
        valorManifesto: 0.0,
        pesoManifesto: 0,
        chaveMDFe: "",
        sequenciaNFe: "",
        protocoloMDFe: "",
        notasFiscais: []
      });
    }
    return () => {
      veiculoStore.removeChangeListener(onVeiculosChange);
      motoristaStore.removeChangeListener(onMotoristasChange);
      empresaStore.removeChangeListener(onEmpresasChange);
    }
  }, [props.match.params.id]);

  function handleSourceChange(doc) {
    setRecord(doc.data());
  }


  const handleBoolChange = (event) => {
    setRecord({ ...record, [event.target.name]: event.target.checked });
  };

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




  function addNFE() {
    var newRecord = { ...record };
    newRecord.notasFiscais.push(newNFE);
    setNewNFE(emptyNFE())
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
      {record && empresas && motoristas && veiculos && (
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
                  <h1>{props.match.params.id ? "Editar" : "Incluir"} Manifesto</h1>
                  <ManifestoForm
                    record={record}
                    empresas={empresas}
                    motoristas={motoristas}
                    veiculos={veiculos}
                    newNFE={newNFE}
                    onAddNFE={addNFE}
                    onNewNFEChange={handleNewNFEChange}
                    onChange={handleChange}
                    onBoolChange={handleBoolChange}
                    onSubmit={handleSubmit}
                    onCancel={handleCancel}
                  ></ManifestoForm>
                </Container>
              </Paper>
            </Grid>
          </Grid>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default ManifestoPage;
