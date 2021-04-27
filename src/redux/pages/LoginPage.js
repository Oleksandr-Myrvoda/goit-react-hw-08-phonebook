import React, { Component } from "react";
import { connect } from "react-redux";
import { authOperations } from "../auth";

class LoginPage extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ name: "", email: "", password: "" });

    this.props.onLogin(this.state);
    // this.setState({ email: '', password: '' });
  };

  render() {
    const { email, password } = this.setState;
    return (
      <div>
        <h1>Login page</h1>

        <form onSubmit={this.handleSubmit} autocomplete="off">
          <label>
            Email
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Password
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onLogin: authOperations.logIn,
};

export default connect(null, mapDispatchToProps)(LoginPage);
