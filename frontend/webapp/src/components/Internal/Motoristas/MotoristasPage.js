import React, { useState, useEffect } from "react";
import MotoristaList from "./MotoristaList";
import {
  setListObserver
} from "../../../api/motoristaApi";
import { manageRecordList } from "../../../api/commonApi"

const MotoristasPage = () => {
  const [records, setRecords] = useState(null);

  useEffect(() => {
    setListObserver("none", handleChange);
  }, []);

  function handleChange(doc) {
    setRecords(manageRecordList(doc));
  }

  return (
    <React.Fragment><MotoristaList rows={records} /></React.Fragment>
  );
};

export default MotoristasPage;
