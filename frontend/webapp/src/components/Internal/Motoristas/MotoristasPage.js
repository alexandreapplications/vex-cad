import React, { useState, useEffect } from "react";
import MotoristaList from "./MotoristaList";
import {
  setListObserver,
  manageRecordList,
} from "../../../api/domainApi";

const MotoristasPage = () => {
  const [records, setRecords] = useState(null);

  useEffect(() => {
    setListObserver(handleChange);
  }, []);

  function handleChange(doc) {
    setRecords(manageRecordList(doc));
  }

  return (
    <React.Fragment>{records && <MotoristaList rows={records} />}</React.Fragment>
  );
};

export default MotoristasPage;
