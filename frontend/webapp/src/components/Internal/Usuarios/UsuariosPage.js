import React, { useState, useEffect } from "react";
import MotoristaList from "./UsuarioList";
import {
  setListObserver
} from "../../../api/usuarioApi";
import { manageRecordList } from "../../../api/commonApi"

const UsuariosPage = () => {
  const [records, setRecords] = useState(null);

  useEffect(() => {
    setListObserver("none", handleChange);
  }, []);

  function handleChange(doc) {
    setRecords(manageRecordList(doc));
  }

  return (
    <React.Fragment>{records && <MotoristaList rows={records} />}</React.Fragment>
  );
};

export default UsuariosPage;
