import React, { Component } from "react";
import LastPlayedCard from "../LastPlayedCard";
import SectionTitle from "../SectionTitle";
import firstLastPlayed from "../../assets/img/lastPlayed-1.png";

export default class LastPlayed extends Component {
  render() {
    return (
      <div>
        <div>
          <SectionTitle title="last played" isSlider={false} />
          <LastPlayedCard
            image={firstLastPlayed}
            content="Hogwarts Legacy 50%"
          />
          <LastPlayedCard
            image={firstLastPlayed}
            content="God Of War: Ragnarök 72.5%"
          />
          <LastPlayedCard
            image={firstLastPlayed}
            content="Crash Bandicoot N. Sane Trilogy 34%"
          />
          <LastPlayedCard
            image={firstLastPlayed}
            content="Dying Light 2 Stay Human 100%"
          />
        </div>
      </div>
    );
  }
}
