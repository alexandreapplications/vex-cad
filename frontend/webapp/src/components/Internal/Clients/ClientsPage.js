import React, { useState, useEffect } from "react";
import ClientList from "./ClientList";
import {
  getClientes,
  setClientesObserver,
  manageRecordList,
} from "../../../api/clientApi";

const ClientsPage = () => {
  const [clients, setClients] = useState(null);

  useEffect(() => {
    // getClientes().then((_clientes) => setClients(_clientes));
    setClientesObserver(handleChange);
  }, []);

  function handleChange(doc) {
    setClients(manageRecordList(doc));
  }

  return (
    <React.Fragment>{clients && <ClientList rows={clients} />}</React.Fragment>
  );
};

export default ClientsPage;
