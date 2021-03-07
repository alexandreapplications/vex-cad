import React, { useState, useEffect } from "react";
import DomainList from "./DomainList";
import domainStore from "../../Stores/DomainStore"

const DomainsPage = () => {
  const [domains, setDomains] = useState(domainStore.getDomains());

  useEffect(() => {
    function onDomainChanges() {
      setDomains(domainStore.getDomains());
    }

    domainStore.addChangeListener(onDomainChanges);

    return () => {
      domainStore.removeChangeListener(onDomainChanges);
    }

  }, [domains]);

  return (
    <React.Fragment>{domains && <DomainList rows={domains} />}</React.Fragment>
  );
};

export default DomainsPage;
