import React from "react";
import {Link} from "react-router-dom";

function RegisterForm() {
  return (
    <form className="form">
      <div>
        <h6 style={{fontSize: "2rem"}}>Register</h6>
        <hr />
      </div>

      <div className="form-group">
        <label htmlFor="InputEmail">Email</label>
        <input
          type="text"
          className="form-control"
          id="InputUsername"
          aria-describedby="usernameHelp"
          placeholder="Enter email"
        />
        <small id="emailHelp" class="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>

      <div className="form-group">
        <label htmlFor="InputUsername">Username</label>
        <input
          type="text"
          className="form-control"
          id="InputUsername"
          aria-describedby="username"
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
        Sign Up
      </button>

      <Link to="/login">
        <button type="submit" className="btn btn-secondary" style={{marginLeft: "1rem"}}>
          Switch to Login
        </button>
      </Link>
    </form>
  );
}

export default RegisterForm;
