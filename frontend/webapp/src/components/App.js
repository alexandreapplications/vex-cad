import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./Public/HomePage";
import AboutPage from "./Public/AboutPage";
import PageInfra from "./_common/PageInfra";
import SignInPage from "./Security/SignInPage";
import SignUpPage from "./Security/SignUpPage";
import PageNotFound from "./PageNotFound";
function App() {
  return (
    <PageInfra>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/signin" component={SignInPage} />
        <Route exact path="/signup" component={SignUpPage} />
        {/* <PrivateRoute exact path="/servers" component={ServerListPage} /> */}
        <Route component={PageNotFound} />
      </Switch>
    </PageInfra>
  );
}

export default App;
