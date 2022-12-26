import React, { Component } from "react";
import "./style.css";
export default class SocialMediaButton extends Component {
  render() {
    const { img } = this.props;
    return (
      <button className="social-media-button">
        <img src={img} alt="img" />
      </button>
    );
  }
}
