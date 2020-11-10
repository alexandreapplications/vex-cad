import React, { useState, useEffect } from "react";
import ClientList from "./ClientList";
import { getClientes } from "../../../api/clientApi";

const ClientsPage = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    getClientes().then((_courses) => setClients(_courses));
  }, []);

  return (
    <React.Fragment>
      <ClientList rows={clients} />
    </React.Fragment>
  );
};

export default ClientsPage;
