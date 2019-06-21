import React, { Component } from "react";
import "./App.css";
import Nav from "./Components/Nav/Nav";
import routes from "./routes";
import { withRouter } from "react-router-dom";
class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    console.log("this.props", this.props);
    return (
      <div>
        {this.props.location.pathname !== "/" ? <Nav /> : null}
        {routes}
      </div>
    );
  }
}

export default withRouter(App);
