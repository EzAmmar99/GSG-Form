import React, { Component } from "react";
import LastPlayedCard from "../LastPlayedCard";
import SectionTitle from "../SectionTitle";
import FirstLastPlayed from "../../assets/img/lastPlayed-1.png";
import SecondLastPlayed from "../../assets/img/Ellipse.png";
import ThirdLastPlayed from "../../assets/img/Ellipse 4.png";
import ForthLastPlayed from "../../assets/img/Ellipse 5.png";

export default class LastPlayed extends Component {
  render() {
    return (
      <div>
        <div>
          <SectionTitle title="last played" isSlider={false} />
          <LastPlayedCard
            image={FirstLastPlayed}
            content="Hogwarts Legacy 50%"
          />
          <LastPlayedCard
            image={SecondLastPlayed}
            content="God Of War: Ragnarök 72.5%"
          />
          <LastPlayedCard
            image={ThirdLastPlayed}
            content="Crash Bandicoot N. Sane Trilogy 34%"
          />
          <LastPlayedCard
            image={ForthLastPlayed}
            content="Dying Light 2 Stay Human 100%"
          />
        </div>
      </div>
    );
  }
}
