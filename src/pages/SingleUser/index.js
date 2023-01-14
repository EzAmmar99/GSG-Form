import axios from "axios";
import React, { Component } from "react";
import img_avatar from "../../assets/img/img_avatar.png";
import "./style.css";
export default class SingleUser extends Component {
  state = {
    userData: {},
  };

  getUserData = async () => {
    const userId = window.location.href.split("/")[4];
    const userData = await axios.get(
      `https://react-tt-api.onrender.com/api/users/${userId}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );

    this.setState({ userData: userData.data });
  };

  componentDidMount() {
    this.getUserData();
  }
  render() {
    return (
      <div class="card">
        <img
          src={img_avatar}
          alt="Avatar"
          style={{ height: "300px", width: "300px" }}
        />
        <div class="container">
          <h4>{this.state.userData.email}</h4>
          <h5>{this.state.userData.name}</h5>
          <p>{this.state.userData._id}</p>
        </div>
      </div>
    );
  }
}
