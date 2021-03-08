import React, { useState, useEffect } from "react";
import ManifestoList from "./ManifestoList";
import {
  setListObserver,
} from "../../../api/manifestoApi";
import { manageRecordList } from "../../../api/commonApi"

const ManifestosPage = () => {
  const [records, setRecords] = useState(null);

  useEffect(() => {
    setListObserver("default", handleChange);
  }, []);

  function handleChange(doc) {
    setRecords(manageRecordList(doc));
  }

  return (
    <React.Fragment>{records && <ManifestoList rows={records} />}</React.Fragment>
  );
};

export default ManifestosPage;
