import React from "react";
import "./Footer.css";
import {BsGithub, BsLinkedin, BsTwitter} from "react-icons/bs";

function Footer() {
  return (
    <footer className="footer-section">
      <button className="footer-btn">Open Source on Github</button>

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
