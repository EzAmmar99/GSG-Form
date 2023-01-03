import React, { Component } from "react";

import logoHome from "../../assets/img/logoHome.png";
import like from "../../assets/img/like.png";
import setting from "../../assets/img/setting.png";
import puzzle from "../../assets/img/puzzle.png";
import moon from "../../assets/img/moon.png";
import sun from "../../assets/img/sun.png";

import "./style.css";

export default class Sidebar extends Component {
  render() {
    return (
      <div className="sidenav">
        <div>
          <img src={logoHome} alt="img" width={"80px"} height={"80px"} />
        </div>
        <div className="setting">
          <img src={like} alt="img" width={"50.42px"} height={"50.42px"} />
          <img src={setting} alt="img" width={"50.42px"} height={"50.42px"} />
          <img src={puzzle} alt="img" width={"50.42px"} height={"50.42px"} />
        </div>
        <div className="mood">
          <img src={moon} alt="img" width={"36.67px"} height={"36.67px"} />
          <img src={sun} alt="img" width={"36.67px"} height={"36.67px"} />
        </div>
      </div>
    );
  }
}
