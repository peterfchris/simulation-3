import React, { Component } from "react";
import Axios from "axios";

export class Auth extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: ""
    };
  }

  handleLogin = e => {
    e.preventDefault();
    Axios.post("/auth/login", {
      username: this.state.username,
      password: this.state.password
    }).then(res => this.props.history.push("/dashboard"));
  };

  handleRegister = e => {
    e.preventDefault();
    Axios.post("/auth/register", {
      username: this.state.username,
      password: this.state.password
    }).then(res => this.props.history.push("/dashboard"));
  };

  handleLoginUpdate = e => {
    e.preventDefault();
    this.setState({
      username: e.target.value,
      password: e.target.value
    });
  };

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            name="username"
            placeholder="username"
            onChange={this.handleLoginUpdate}
          />
          <input
            type="password"
            name="password"
            placeholder="password"
            onChange={this.handleLoginUpdate}
          />
          <button onClick={this.handleLogin}>Login</button>
          <button onClick={this.handleRegister}>Register</button>
        </form>
      </div>
    );
  }
}

export default Auth;
