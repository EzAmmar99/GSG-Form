import React, { Component } from "react";
import { Navigate, Outlet } from "react-router-dom";

export default class ProtectedRoute extends Component {
  render() {
    return (
      <div>
        {this.props.isAuthorized ? (
          <>
            <Outlet />
          </>
        ) : (
          <>
            <Navigate to="/login" />
          </>
        )}
      </div>
    );
  }
}
