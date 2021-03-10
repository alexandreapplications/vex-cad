import React, { useEffect, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import HomePage from "./Public/HomePage";
import AboutPage from "./Public/AboutPage";
import PageInfra from "./_common/PageInfra";
import SignInPage from "./Security/SignInPage";
import SignUpPage from "./Security/SignUpPage";
import PageNotFound from "./PageNotFound";
import authStore from "./Stores/AuthStore";
import usuarioStore from "./Stores/UsuarioStore";
import VeiculoPage from "./Internal/Veiculos/VeiculoPage";
import VeiculosPage from "./Internal/Veiculos/VeiculosPage";
import MotoristaPage from "./Internal/Motoristas/MotoristaPage";
import MotoristasPage from "./Internal/Motoristas/MotoristasPage";
import EmpresaPage from "./Internal/Empresas/EmpresaPage";
import EmpresasPage from "./Internal/Empresas/EmpresasPage";
import DomainsPage from "./Internal/Domains/DomainsPage";
import DomainPage from "./Internal/Domains/DomainPage";
import messageStore from "./Stores/MessageStore";
import LandingPage from "./Internal/LandingPage";
import ManifestosPage from "./Internal/Manifestos/ManifestosPage";
import ManifestoPage from "./Internal/Manifestos/ManifestoPage";

const App = (...props) => {
  const [autenticacao, setAutenticacao] = useState(authStore.getUser());
  const [inicializado, setInicializado] = useState(false);
  const [usuario, setUsuario] = useState(usuarioStore.getRecord());
  const [messages, setMessages] = useState(messageStore.getMessages());

  useEffect(() => {
    function onAuthChange() {
      const _autenticacao = authStore.getUser();
      setAutenticacao(_autenticacao);
      setInicializado(authStore.isInitialized());
    }
    function onMessageChange() {
      setMessages(messageStore.getMessages());
    }
    function onUsuarioChange() {
      setUsuario(usuarioStore.getRecord());
    }

    authStore.addChangeListener(onAuthChange);
    messageStore.addChangeListener(onMessageChange);
    usuarioStore.addChangeListener(onUsuarioChange);

    return () => {
      authStore.removeChangeListener(onAuthChange);
      messageStore.removeChangeListener(onMessageChange);
      usuarioStore.removeChangeListener(onUsuarioChange);
    };
  });

  const PrivateRoute = ({ component: Component, ...rest }) =>
    autenticacao ? (
      <Route {...rest} render={(props) => <Component {...props} />} />
    ) : (
      <Redirect
        to={{
          pathname: "/signin",
          state: { from: rest.path },
        }}
      />
    );

  return (
    <React.Fragment>
      {inicializado ? (
        <PageInfra>
          <Switch>
            <PrivateRoute path="/dashboard" component={LandingPage} />
            <PrivateRoute path="/domains" component={DomainsPage} />
            <PrivateRoute path="/domain/:id" component={DomainPage} />
            <PrivateRoute path="/domain" component={DomainPage} />
            <PrivateRoute path="/motoristas" component={MotoristasPage} />
            <PrivateRoute path="/motorista/:id" component={MotoristaPage} />
            <PrivateRoute path="/motorista" component={MotoristaPage} />
            <PrivateRoute path="/veiculos" component={VeiculosPage} />
            <PrivateRoute path="/veiculo/:id" component={VeiculoPage} />
            <PrivateRoute path="/veiculo" component={VeiculoPage} />
            <PrivateRoute path="/empresas" component={EmpresasPage} />
            <PrivateRoute path="/empresa/:id" component={EmpresaPage} />
            <PrivateRoute path="/empresa" component={EmpresaPage} />
            <PrivateRoute path="/manifestos" component={ManifestosPage} />
            <PrivateRoute path="/manifesto/:id" component={ManifestoPage} />
            <PrivateRoute path="/manifesto" component={ManifestoPage} />
            <Route exact path="/" component={HomePage} />
            <Route exact path="/about" component={AboutPage} />
            <Route path="/signin" component={SignInPage} />
            <Route path="/signup" component={SignUpPage} />
            <Route component={PageNotFound} />
          </Switch>
          <p>{JSON.stringify(usuario)}</p>
        </PageInfra>

      ) : (
        <p>inicializando</p>
      )}
      {messages.map((item) => (
        <p key={item.id}>{item.value}</p>
      ))}
    </React.Fragment>
  );
};

export default App;
