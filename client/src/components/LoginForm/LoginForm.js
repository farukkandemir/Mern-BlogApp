import React, {useRef} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import {useContextAPI} from "../../context/Context";

function LoginForm() {
  const usernameRef = useRef("");
  const passwordRef = useRef("");

  const {dispatch, messages, isFetching} = useContextAPI();

  async function handleLogin(e) {
    e.preventDefault();

    dispatch({type: "LOGIN_START"});

    const loginResult = await axios
      .post("http://localhost:4000/api/login", {
        username: usernameRef.current.value,
        password: passwordRef.current.value,
      })
      .catch((error) => {
        if (error.response.status === 422) {
          dispatch({type: "LOGIN_FAILURE", payload: error.response.data.errors});
        }

        if (error.response.status === 400) {
          dispatch({type: "CREDENTIALS_FAILURE", payload: error.response.data.errors});
        }
      });

    dispatch({
      type: "LOGIN_SUCCESS",
      payload: {user: loginResult.data.user, blogs: loginResult.data.blogs},
    });

    window.location.replace("/dashboard");
  }

  return (
    <form className="form" onSubmit={handleLogin}>
      <div>
        <h6 style={{fontSize: "2rem"}}>Login</h6>
        <hr />
      </div>

      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          className="form-control"
          id="username"
          placeholder="Enter username"
          ref={usernameRef}
        />
        {messages?.username && <small className="text-danger">{messages.username}</small>}
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          id="password"
          placeholder="Password"
          ref={passwordRef}
        />
        {messages?.password && <small className="text-danger">{messages.password}</small>}
      </div>

      <button type="submit" className="btn btn-primary">
        {isFetching ? "Loading..." : "Login"}
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
