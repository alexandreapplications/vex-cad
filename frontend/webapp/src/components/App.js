import React, { useEffect, useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import HomePage from "./Public/HomePage";
import AboutPage from "./Public/AboutPage";
import PageInfra from "./_common/PageInfra";
import SignInPage from "./Security/SignInPage";
import SignUpPage from "./Security/SignUpPage";
import PageNotFound from "./PageNotFound";
import authStore from "./Stores/AuthStore";
import ManageClientPage from "./Internal/Clients/ManageClientPage";
import ClientsPage from "./Internal/Clients/ClientsPage";
import messageStore from "./Stores/MessageStore";

const App = (...props) => {
  const [user, setUser] = useState(authStore.getUser());
  const [inicializado, setInicializado] = useState(false);
  const [messages, setMessages] = useState(messageStore.getMessages());

  useEffect(() => {
    function onAuthChange() {
      setUser(authStore.getUser());
      setInicializado(authStore.isInitialized());
    }
    function onMessageChange() {
      setMessages(messageStore.getMessages());
    }

    authStore.addChangeListener(onAuthChange);
    messageStore.addChangeListener(onMessageChange);

    return () => {
      authStore.removeChangeListener(onAuthChange);
      messageStore.removeChangeListener(onMessageChange);
    };
  });

  const PrivateRoute = ({ component: Component, ...rest }) =>
    user ? (
      <Route {...rest} render={(props) => <Component {...props} />} />
    ) : (
      <Redirect
        to={{
          pathname: "/signin",
        }}
      />
    );

  return (
    <React.Fragment>
      {inicializado ? (
        <PageInfra user={user}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/client/:id" component={ManageClientPage} />
            <Route path="/client" component={ManageClientPage} />
            <Route path="/clients/:id" component={ClientsPage} />
            <Route path="/clients" component={ClientsPage} />
            <PrivateRoute exact path="/about" component={AboutPage} />
            <Route exact path="/signin" component={SignInPage} />
            <Route exact path="/signup" component={SignUpPage} />
            {/* <PrivateRoute exact path="/servers" component={ServerListPage} /> */}
            <Route component={PageNotFound} />
          </Switch>
        </PageInfra>
      ) : (
        <p>inicializando</p>
      )}
      {messages.map((item) => (
        <p key={item.id}>{item.value}</p>
      ))}
      <p>{JSON.stringify(messages)}</p>
    </React.Fragment>
  );
};

export default App;
