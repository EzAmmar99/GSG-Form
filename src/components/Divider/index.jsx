import React, { Component } from "react";
import "./style.css"
export default class Divider extends Component {
  render() {
    return (
      <span className="divider line razor">
        <span className="divider-text">or</span>
      </span>
    );
  }
}
