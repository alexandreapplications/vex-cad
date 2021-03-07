import React, { useState, useEffect } from "react";
import EmpresaList from "./EmpresaList";
import {
  setListObserver
} from "../../../api/empresaApi";
import { manageRecordList } from "../../../api/commonApi"

const MotoristasPage = () => {
  const [records, setRecords] = useState(null);

  useEffect(() => {
    setListObserver("default", handleChange);
  }, []);

  function handleChange(doc) {
    setRecords(manageRecordList(doc));
  }

  return (
    <React.Fragment>{records && <EmpresaList rows={records} />}</React.Fragment>
  );
};

export default MotoristasPage;
