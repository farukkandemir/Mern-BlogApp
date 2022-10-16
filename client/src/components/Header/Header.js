import React from "react";
import "./Header.css";
import {Link} from "react-router-dom";
import {useContextAPI} from "../../context/Context";

function Header() {
  const {user, dispatch} = useContextAPI();

  return (
    <header className="header-container">
      <Link to="/">
        <h1>Blogify</h1>
      </Link>

      {!user?.accessToken ? (
        <div>
          <Link to="/">
            <button
              style={{backgroundColor: "#efefef", color: "black"}}
              className="btn-header"
            >
              Home
            </button>
          </Link>

          <Link to="/login">
            <button className="btn-header">Login / Register</button>
          </Link>
        </div>
      ) : (
        <div className="header-btns">
          <Link to="/dashboard">
            <button className="btn-header">MyPosts</button>
          </Link>
          <Link to="/newpost">
            <button className="btn-header">Create Post</button>
          </Link>
          <Link to="/profile">
            <button className="btn-header">Profile</button>
          </Link>

          <button className="btn-header" onClick={() => dispatch({type: "LOG_OUT"})}>
            LogOut
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
