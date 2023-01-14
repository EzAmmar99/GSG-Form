import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import * as yup from "yup";

import singLogo from "../../assets/img/singLogo.png";
import corner from "../../assets/img/corner.png";
import google from "../../assets/img/google.png";
import Descriprion from "../../components/Descriprion";
import Divider from "../../components/Divider";

import "./style.css";
import axios from "axios";

export default class SignUp extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    isCheck: false,
    errors: [],
  };

  schema = yup.object().shape({
    name: yup
      .string()
      .min(6, "name must be more 6 digits")
      .max(16, "name must be less 16 digits")
      .required(),
    email: yup.string().required("Required"),
    password: yup
      .string()
      .required("Required")
      .min(8, "Must be more 8 digits")
      .matches(
        /^(?=.*[a-z])/,
        "password must contain at least one lowercase character"
      )
      .matches(
        /^(?=.*[A-Z])/,
        "password must contain at least one uppercase character"
      )
      .matches(/^(?=.*[0-9])/, "password must contain at least one number")
      .matches(
        /^(?=.*[!@#$%^&*])/,
        "password must contain at least one special characters"
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords don't match!")
      .required("Required"),
    isCheck: yup.boolean().oneOf([true]).required("Required"),
  });

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  checkOnChange = (e) => {
    this.setState({ isCheck: !this.state.isCheck });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.schema
      .validate(
        {
          name: this.state.name,
          email: this.state.email,
          password: this.state.password,
          confirmPassword: this.state.confirmPassword,
          isCheck: this.state.isCheck,
        },
        { abortEarly: false }
      )
      .then(async () => {
        const res = await axios.post(
          "https://react-tt-api.onrender.com/api/users/signup",
          {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
          }
        );

        if (res) {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("username", res.data.name);
          this.props.login();
        }
      })
      .catch((error) => {
        if (error.errors) {
          this.setState({ errors: error.errors });
        } else {
          this.setState({ errors: [error.message] });
        }
      });
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
            <div>
              {this.state.errors.map((error) => (
                <span style={{ color: "red" }}>{error}</span>
              ))}
            </div>
            <form className="signUp-form" onSubmit={this.onSubmit}>
              <label className="signUp-from-label" htmlFor="name">
                Name
              </label>
              <input
                className="signUp-from-input"
                type="text"
                id="name"
                name="name"
                placeholder="Write your name"
                onChange={this.onChange}
                value={this.state.name}
              />

              <label className="signUp-from-label" htmlFor="email">
                Email address
              </label>
              <input
                className="signUp-from-input"
                type="email"
                id="email"
                name="email"
                placeholder="Write your email"
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
                onChange={this.onChange}
                value={this.state.confirmPassword}
              />
              <div className="signUp-form-check">
                <input
                  type="checkbox"
                  id="isCheck"
                  name="isCheck"
                  value={this.state.isCheck}
                  onClick={this.checkOnChange}
                />
                <label className="signUp-form-check-text" htmlFor="isCheck">
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
            </form>
            <button
              className="login-btn"
              onClick={() => {
                <Navigate to="/login" />;
              }}
            >
              <div style={{ marginTop: "20px" }}>
                <img src={google} alt="img" />
              </div>
              <div style={{ paddingLeft: "20px", marginTop: "20px" }}>
                Login
              </div>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
