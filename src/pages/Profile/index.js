import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default class Profile extends Component {
  state = {
    data: {},
  };
  getProfileData = async () => {
    const data = await axios.get(
      "https://react-tt-api.onrender.com/api/users/profile",
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    this.setState({ data: data.data });
  };

  componentDidMount() {
    this.getProfileData();
  }

  render() {
    return (
      <div style={{ margin: "50px 40%", textAlign: "center" }}>
        <h1>Profile</h1>

        <div
          style={{
            border: "1px solid",
            padding: "8px",
            boxShadow: "5px 10px #888888",
            textAlign: "center",
          }}
        >
          <p>username : {this.state.data.name}</p>
          <p>email : {this.state.data.email}</p>
          <p>isAdmin : {this.state.data.isAdmin ? "true" : "false"}</p>
        </div>

        {localStorage.getItem("isAdmin") === "true" ? (
          <Link to={`/all-user`}>
            <button className="button">All User</button>
          </Link>
        ) : null}
      </div>
    );
  }
}
