import React from "react";
import {Link} from "react-router-dom";

function LoginForm() {
  return (
    <form className="form">
      <div>
        <h6 style={{fontSize: "2rem"}}>Login</h6>
        <hr />
      </div>

      <div className="form-group">
        <label htmlFor="InputEmail">Username</label>
        <input
          type="text"
          className="form-control"
          id="InputUsername"
          aria-describedby="usernameHelp"
          placeholder="Enter username"
        />
      </div>

      <div className="form-group">
        <label htmlFor="InputPassword">Password</label>
        <input
          type="password"
          className="form-control"
          id="InputPassword"
          placeholder="Password"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Login
      </button>

      <Link to="/register">
        <button type="submit" className="btn btn-secondary" style={{marginLeft: "1rem"}}>
          Switch to Sign Up
        </button>
      </Link>
    </form>
  );
}

export default LoginForm;
