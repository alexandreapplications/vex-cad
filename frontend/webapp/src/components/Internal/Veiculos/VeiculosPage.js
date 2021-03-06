import React, { useState, useEffect } from "react";
import VeiculoList from "./VeiculoList";
import {
  setListObserver,
  manageRecordList,
} from "../../../api/veiculoApi";

const VeiculosPage = () => {
  const [records, setRecords] = useState(null);

  useEffect(() => {
    setListObserver(handleChange);
  }, []);

  function handleChange(doc) {
    setRecords(manageRecordList(doc));
  }

  return (
    <React.Fragment>{records && <VeiculoList rows={records} />}</React.Fragment>
  );
};

export default VeiculosPage;
