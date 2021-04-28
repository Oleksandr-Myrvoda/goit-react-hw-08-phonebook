import React, { Component, Suspense, lazy } from "react";
import { Switch } from "react-router";
import { connect } from "react-redux";
import { authOperations } from "./redux/auth";
import AppBar from "./components/AppBar";
import Container from "./components/Container";

import PrivateRoute from "./components/Routes/PrivatRoute";
import PublicRoute from "./components/Routes/PublicRoute";

import "./App.css";

const HomePage = lazy(() =>
  import("./pages/HomePage" /* webpackChunkName: "home-page" */)
);
const ContactsPage = lazy(() =>
  import("./pages/ContactsPage" /* webpackChunkName: "contacts-page" */)
);
const RegisterPage = lazy(() =>
  import("./pages/RegisterPage" /* webpackChunkName: "register-page" */)
);
const LoginPage = lazy(() =>
  import("./pages/LoginPage" /* webpackChunkName: "login-page" */)
);

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <div className="mainBox">
        <Container className="section">
          <AppBar />
          <Suspense fallback={<p>Loading...</p>}>
            <Switch>
              <PublicRoute exact path="/" component={HomePage} />
              <PrivateRoute
                path="/contacts"
                redirectTo="/login"
                component={ContactsPage}
              />
              <PublicRoute
                path="/register"
                restricted
                redirectTo="/contacts"
                component={RegisterPage}
              />
              <PublicRoute
                path="/login"
                restricted
                redirectTo="/contacts"
                component={LoginPage}
              />
            </Switch>
          </Suspense>
        </Container>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
