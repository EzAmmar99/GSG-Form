import React, { Component } from "react";
import SocialMediaButton from "../../components/SocialMediaButton";
import logo from "../../assets/img/logo.png";
import controlLogo from "../../assets/img/control-logo.png";
import twitter from "../../assets/img/twitter.png";
import gitHub from "../../assets/img/gitHub.png";
import linked from "../../assets/img/linked.png";

import "./style.css";
import Divider from "../../components/Divider";
import Descriprion from "../../components/Descriprion";

export default class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log("this.state :>> ", this.state);
  };

  render() {
    return (
      <div className="login-contatiner">
        <div className="login-logo-side">
          <Descriprion image={controlLogo} logo={logo} />
        </div>

        <div className="login-from-side">
          <span className="login-title">Join the game!</span>
          <span className="login-sub-title">
            Go inside the best gamers social network!
          </span>
          <div className="social-media">
            <SocialMediaButton img={twitter} />
            <SocialMediaButton img={twitter} />
            <SocialMediaButton img={gitHub} />
            <SocialMediaButton img={linked} />
          </div>

          <Divider />

          <div>
            <form className="login-form" onSubmit={this.onSubmit}>
              <label className="login-from-label" htmlFor="email">
                Your email
              </label>
              <input
                className="login-from-input"
                type="text"
                id="email"
                name="email"
                placeholder="Write your email"
                onChange={this.onChange}
                value={this.state.email}
              />
              <label className="login-from-label" htmlFor="password">
                Enter your password
              </label>
              <input
                className="login-from-input"
                type="password"
                id="password"
                name="password"
                placeholder="•••••••••"
                onChange={this.onChange}
                value={this.state.password}
              />
              <input
                className="login-form-submit"
                type="submit"
                value="Login"
              />
            </form>
            <p className="register">
              Don’t have an account? <a href="">Register</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
