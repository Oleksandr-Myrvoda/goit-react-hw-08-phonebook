import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";

import { authSelectors } from "../../redux/auth";

const Navigation = ({ isAuth }) => {
  return (
    <nav>
      <NavLink exact to="/">
        Home
      </NavLink>

      {isAuth && (
        <NavLink exact to="/contacts">
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
