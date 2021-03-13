import React, { useState, useEffect } from "react";
import VeiculoList from "./VeiculoList";
import {
  setListObserver,
} from "../../../api/veiculoApi";
import { manageRecordList } from "../../../api/commonApi"

const VeiculosPage = () => {
  const [records, setRecords] = useState(null);

  useEffect(() => {
    setListObserver("none", handleChange);
  }, []);

  function handleChange(doc) {
    setRecords(manageRecordList(doc));
  }

  return (
    <React.Fragment>{records && <VeiculoList rows={records} />}</React.Fragment>
  );
};

export default VeiculosPage;
