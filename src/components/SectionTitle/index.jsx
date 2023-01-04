import React, { Component } from "react";

import "./style.css";

export default class SectionTitle extends Component {
  render() {
    const { title, isSlider } = this.props;
    return (
      <p className={!isSlider ? "title-style margin-style" : "title-style"}>
        {title}
      </p>
    );
  }
}
