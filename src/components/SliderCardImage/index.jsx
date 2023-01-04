import React, { Component } from "react";

import "./style.css";

export default class SliderCardImage extends Component {
  render() {
    const { img, content } = this.props;
    return (
      <div className="slider-card">
        <img className="slider-image" src={img} alt="img" />
        <p className="slider-content">{content}</p>
      </div>
    );
  }
}
