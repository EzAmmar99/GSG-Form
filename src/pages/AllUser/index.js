import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default class AllUser extends Component {
  state = {
    data: [],
  };
  getAllUser = async () => {
    const data = await axios.get(
      "https://react-tt-api.onrender.com/api/users",
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    this.setState({ data: data.data });
  };

  moreData = (ele) => {};

  delete = async (ele) => {
    const removedUser = await axios.delete(
      `https://react-tt-api.onrender.com/api/users/${ele._id}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    console.log("removedUser.meesage :>> ", removedUser.data.meesage);
  };

  componentDidMount() {
    this.getAllUser();
  }

  render() {
    return (
      <div>
        <table id="customers">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>isAdmin</th>
              <th>Operation</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data?.map((ele, index) => {
              return (
                <tr>
                  <td>{ele.name}</td>
                  <td>{ele.email}</td>
                  <td>{ele.password}</td>
                  <td>{ele.isAdmin ? "true" : "false"}</td>
                  <td>
                    <button
                      onClick={() => {
                        this.delete(ele);
                      }}
                    >
                      delete
                    </button>
                    <Link to={`/single-user/${ele._id}`}>
                      <button>more</button>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
