import React from "react";
import "./Footer.css";
import {BsGithub, BsLinkedin, BsTwitter} from "react-icons/bs";

function Footer() {
  return (
    <footer className="footer-section">
      <button className="footer-btn">
        <a href="https://github.com/farukkandemir/Mern-BlogApp" target="_blank">
          Open Source on Github
        </a>
      </button>

      <ul className="ul">
        <li>
          <BsGithub size="2rem" />
        </li>
        <li>
          <BsLinkedin size="2rem" />
        </li>
        <li>
          <BsTwitter size="2rem" />
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
