import React, { Component, Suspense, lazy } from "react";
import { Switch } from "react-router";
// import ContactForm from "./Components/ContactsForm";
// import Filter from "./Components/Filter";
// import ContactList from "./Components/ContactList";

import AppBar from "./Components/AppBar";
// import HomePage from "./redux/pages/HomePage";
// import RegisterPage from "./redux/pages/RegisterPage";
// import LoginPage from "./redux/pages/LoginPage";
// import ContactsPage from "./redux/pages/ContactsPage";
import Container from "./Components/Container";

import { connect } from "react-redux";
import { authOperations } from "./redux/auth";

import PrivateRoute from "./Components/Routes/PrivatRoute";
import PublicRoute from "./Components/Routes/PublicRoute";

import "./App.css";

const HomePage = lazy(() =>
  import("./redux/pages/HomePage" /* webpackChunkName: "home-page" */)
);
const ContactsPage = lazy(() =>
  import("./redux/pages/ContactsPage" /* webpackChunkName: "contacts-page" */)
);
const RegisterPage = lazy(() =>
  import("./redux/pages/RegisterPage" /* webpackChunkName: "register-page" */)
);
const LoginPage = lazy(() =>
  import("./redux/pages/LoginPage" /* webpackChunkName: "login-page" */)
);

class App extends Component {
  // componentDidMount() {
  //   this.props.onGetCurrentUser();
  // }

  render() {
    return (
      <div className="mainBox">
        <Container>
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
  // onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);

{
  /* <section title="Phonebook" className="section">
  <h1>Phonebook</h1>
  <ContactForm />
</section>

<section title="Contacts" className="section">
  <h2>Contacts</h2>
  <Filter />
  <ContactList />
</section> */
}
