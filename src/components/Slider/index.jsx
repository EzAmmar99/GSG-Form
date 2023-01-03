import React, { Component } from "react";
import SliderCardImage from "../SliderCardImage";

import wars from "../../assets/img/wars.png";

import "./style.css";
import SectionTitle from "../SectionTitle";

export default class Slider extends Component {
  render() {
    return (
      <div>
        <SectionTitle title="NEW GAMES" isSlider={true} />
        <div className="slider">
          <SliderCardImage
            img={wars}
            content="Join in the new DLC with Kratos to 
            learn more about him and his
            future"
          />
          <SliderCardImage
            img={wars}
            content="Be part of the Suicide Squad and kill the Justice League! -Amanda Waller"
          />
          <SliderCardImage
            img={wars}
            content="Miles Morales discovers powers from his mentor, Peter Parker. Master his unique, bio-electric venom blast attacks."
          />
        </div>
      </div>
    );
  }
}
