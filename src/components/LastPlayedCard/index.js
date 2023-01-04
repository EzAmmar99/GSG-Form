import React, { Component } from "react";

import "./style.css"
;
export default class LastPlayedCard extends Component {
  render() {
    const { image, content } = this.props;
    return (
      <div className="last-played">
        <img src={image} alt="img" />
        <p>{content}</p>
      </div>
    );
  }
}
