import React, { Component } from "react";
import { Link } from "react-router-dom";

import user from "../../assets/img/user.png";

import "./style.css";

export default class User extends Component {
  render() {
    return (
      <div className="user">
        <button className="button" onClick={this.props.logout}>logout</button>
        <h2>
          Welcome back,
          <span>{localStorage.getItem("username") || "player"}</span>
        </h2>
        <Link to="/profile">
          <img src={user} alt="img" width={"80px"} height={"80px"} />
        </Link>
      </div>
    );
  }
}
