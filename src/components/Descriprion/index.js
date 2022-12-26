import React, { Component } from "react";
import "./style.css";
export default class Descriprion extends Component {
  render() {
    const { image, logo, isSignUp } = this.props;

    return (
      <div className={isSignUp ? "isSignUp" : null}>
        {isSignUp ? (
          <img className="logo" src={logo} alt="img" />
        ) : (
          <img className="logo" width="380px" src={logo} alt="img" />
        )}

        <p className="logo-side-description">
          <span
            className="comma"
            style={isSignUp ? { color: "#00DAF7" } : null}
          >
            “
          </span>
          I always observe the people who pass by when I ride an escalator. I'll
          never see most of them again, so I imagine a lot of things about their
          lives... about the day ahead of them.
        </p>

        {isSignUp ? (
          <>
            <p
              className="logo-side-text"
              style={isSignUp ? { color: "#FFFFFF" } : null}
            >
              Hideo Kojima
            </p>
            <img
              className="singUp-control-logo"
              width="40px"
              src={image}
              alt="img"
            />
          </>
        ) : (
          <div className="bottom-logo">
            <div>
              <p className="logo-side-text">Hideo Kojima</p>
            </div>
            <div>
              <img width="300px" src={image} alt="img" />
            </div>
          </div>
        )}
      </div>
    );
  }
}
