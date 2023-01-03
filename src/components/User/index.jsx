import React, { Component } from "react";

import user from "../../assets/img/user.png";

import "./style.css";

export default class User extends Component {
  render() {
    return (
      <div className="user">
        <h2>
          Welcome back,<span>Jenny!</span>
        </h2>
        <img src={user} alt="img" width={"80px"} height={"80px"} />
      </div>
    );
  }
}
