import React, { Component } from "react";
import SectionTitle from "../SectionTitle";
import moreRecentImage from "../../assets/img/moreRecentImage.png";
import cup from "../../assets/img/cup.png";

import "./style.css";

export default class MostResent extends Component {
  render() {
    return (
      <div>
        <SectionTitle title="most recent trophy" isSlider={false} />
        <div className="main-image">
          <img src={moreRecentImage} alt="img" />
          <img className="sub-image" src={cup} alt="img" />
          <div className="top-content-image">
            <p>perfect KILL streak</p>
            <p>You are in the 0.5%</p>
          </div>
          <div className="bottom-content-image">
            <p>assassin's creed odyssey</p>
            <p>last played: 34 hours ago</p>
          </div>
        </div>
      </div>
    );
  }
}
