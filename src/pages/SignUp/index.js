import React, { Component } from "react";
import singLogo from "../../assets/img/singLogo.png";
import corner from "../../assets/img/corner.png";
import Descriprion from "../../components/Descriprion";
import Divider from "../../components/Divider";
import "./style.css";

export default class SignUp extends Component {
  state = {
    email: "",
    password: "",
    confirmPassword: "",
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
      <div className="signUp-contatiner">
        <div className="signUp-logo-side">
          <Descriprion image={corner} logo={singLogo} isSignUp={true} />
        </div>
        <div className="signUp-from-side">
          <span className="signUp-title">Register Individual Account!</span>
          <span className="signUp-sub-title">
            For the purpose of gamers regulation, your details are required.
          </span>

          <div>
            <form className="signUp-form" onSubmit={this.onSubmit}>
              <label className="signUp-from-label" htmlFor="email">
                Email address
              </label>
              <input
                className="signUp-from-input"
                type="text"
                id="email"
                name="email"
                placeholder="Write your email"
                required
                onChange={this.onChange}
                value={this.state.email}
              />
              <label className="signUp-from-label" htmlFor="password">
                Create password
              </label>
              <input
                className="signUp-from-input"
                type="password"
                id="password"
                name="password"
                placeholder="•••••••••"
                required
                onChange={this.onChange}
                value={this.state.password}
              />
              <label className="signUp-from-label" htmlFor="confirmPassword">
                Repeat password
              </label>
              <input
                className="signUp-from-input"
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="•••••••••"
                required
                onChange={this.onChange}
                value={this.state.confirmPassword}
              />
              <div className="signUp-form-check">
                <input type="checkbox" id="agree" name="agree" value="" />
                <label className="signUp-form-check-text" htmlFor="agree">
                  I agree to terms & conditions
                </label>
              </div>
              <input
                className="signUp-form-submit"
                type="submit"
                value="Register Account"
              />
              <span style={{ width: "90%" }}>
                <Divider />
              </span>
              <input className="login-btn" type="submit" value="Login" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
