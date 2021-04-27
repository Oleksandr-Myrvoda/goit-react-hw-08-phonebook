import React from "react";
import { connect } from "react-redux";
import styles from "./UserMenu.module.css";

import { authSelectors, authOperations } from "../../redux/auth";

const UserMenu = ({ name, onLogout }) => {
  return (
    <div className={styles.userContent}>
      <span className={styles.userText}>Welcome, {name}</span>

      <button type="button" className={styles.button} onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  name: authSelectors.getUsername(state),
});

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
