import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import styles from "../AuthNav/AuthNav.module.css";

import { authSelectors } from "../../redux/auth";

const Navigation = ({ isAuth }) => {
  return (
    <nav>
      <NavLink
        exact
        className={styles.link}
        activeClassName={styles.activeLink}
        to="/"
      >
        Home
      </NavLink>

      {isAuth && (
        <NavLink
          exact
          className={styles.link}
          activeClassName={styles.activeLink}
          to="/contacts"
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

const mapStateToProps = (state) => ({
  isAuth: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(Navigation);
