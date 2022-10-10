import React from "react";
import style from "./Header.css";
import {Link} from "react-router-dom";

function Header() {
  return (
    <header className="header-container">
      <h1>Blogify</h1>
      <div>
        <Link>
          <button
            style={{backgroundColor: "#efefef", color: "black"}}
            className="btn-header"
          >
            Home
          </button>
        </Link>

        <Link to="/register">
          <button className="btn-header">Login / Register</button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
