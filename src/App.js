import React, { Component } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import AllUser from "./pages/AllUser";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import SingleUser from "./pages/SingleUser";

export default class App extends Component {
  state = {
    isAuthorized: false,
  };

  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) this.setState({ isAuthorized: true });
  }

  login = () => {
    this.setState({ isAuthorized: true });
  };

  logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");

    this.setState({ isAuthorized: false });
  };

  render() {
    return (
      <>
        <Routes>
          {/* <Route index element={<Navigate to="/login" />} /> */}
          <Route
            path="/login"
            element={
              <>
                {this.state.isAuthorized ? (
                  <Navigate to="/" />
                ) : (
                  <Login login={this.login} />
                )}
              </>
            }
          />

          <Route
            path="/signUp"
            element={
              <>
                {this.state.isAuthorized ? (
                  <Navigate to="/" />
                ) : (
                  <SignUp login={this.login} />
                )}
              </>
            }
          />

          <Route
            path="/"
            element={
              <ProtectedRoute
                isAuthorized={this.state.isAuthorized}
                logout={this.logout}
              />
            }
          >
            <Route index element={<Home logout={this.logout} />} />
            <Route path="profile" element={<Profile />} />
          </Route>

          {localStorage.getItem("isAdmin") === "true" && (
            <>
              <Route
                path="/all-user"
                element={
                  <>
                    {this.state.isAuthorized ? (
                      localStorage.getItem("isAdmin") === "true" ? (
                        <AllUser />
                      ) : (
                        <h1>You do not have permission to access this page</h1>
                      )
                    ) : (
                      <Login login={this.login} />
                    )}
                  </>
                }
              />

              <Route
                path="/single-user/:id"
                element={
                  <>
                    {this.state.isAuthorized ? (
                      localStorage.getItem("isAdmin") === "true" ? (
                        <SingleUser />
                      ) : (
                        <h1>You do not have permission to access this page</h1>
                      )
                    ) : (
                      <Login login={this.login} />
                    )}
                  </>
                }
              />
            </>
          )}

          <Route path="*" element={<h1>page not found</h1>} />
        </Routes>
      </>
    );
  }
}
