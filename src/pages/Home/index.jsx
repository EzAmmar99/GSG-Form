import React, { Component } from "react";
import Sidebar from "../../components/Sidebar";
import User from "../../components/User";
import Slider from "../../components/Slider";
import LastPlayed from "../../components/LastPlayed";
import MostResent from "../../components/MostResent";
import Friends from "../../components/Friends";

import "./style.css";

export default class Home extends Component {
  render() {
    return (
      <div style={{ padding: "0 0 0 1% " }}>
        <Sidebar />
        <div className="side-line"></div>
        <div className="main">
          <User />
          <Slider />
          <div className="other">
            <LastPlayed />
            <MostResent />
            <Friends />
          </div>
        </div>
      </div>
    );
  }
}
