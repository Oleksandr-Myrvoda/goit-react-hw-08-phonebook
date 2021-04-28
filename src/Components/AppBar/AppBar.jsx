import React from "react";
import { connect } from "react-redux";
import styles from "./AppBar.module.css";

import { authSelectors } from "../../redux/auth";

import Navigation from "../Navigation";
import AuthNav from "../AuthNav";
import UserMenu from "../UserMenu";

const AppBar = ({ isAuth }) => {
  return (
    <header className={styles.header}>
      <Navigation />

      {isAuth ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

const mapStateToProps = (state) => ({
  isAuth: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);
