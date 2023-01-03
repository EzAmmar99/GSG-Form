import React, { Component } from "react";
import SectionTitle from "../SectionTitle";
import friends from "../../assets/img/friends.png";

export default class Friends extends Component {
  render() {
    return (
      <div style={{marginLeft: "50px"}}>
        <SectionTitle title="friends" isSlider={false} />
        <img src={friends} alt="img" />
      </div>
    );
  }
}
