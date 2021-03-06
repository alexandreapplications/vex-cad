import React, { useState, useEffect } from "react";
import DomainList from "./DomainList";
import {
  setListObserver,
  manageRecordList,
} from "../../../api/domainApi";

const DomainsPage = () => {
  const [domains, setDomains] = useState(null);

  useEffect(() => {
    setListObserver(handleChange);
  }, []);

  function handleChange(doc) {
    setDomains(manageRecordList(doc));
  }

  return (
    <React.Fragment>{domains && <DomainList rows={domains} />}</React.Fragment>
  );
};

export default DomainsPage;
