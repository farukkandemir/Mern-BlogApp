import React from "react";
import "./Header.css";
import {Link} from "react-router-dom";

function Header() {
  const user = true;

  return (
    <header className="header-container">
      <Link to="/">
        <h1>Blogify</h1>
      </Link>

      {!user ? (
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
          <button className="btn-header">MyPosts</button>
          <Link to="/newpost">
            <button className="btn-header">Create Post</button>
          </Link>
          <button className="btn-header">Profile</button>
          <button className="btn-header">LogOut</button>
        </div>
      )}
    </header>
  );
}

export default Header;
