import React from "react";
import "./Footer.css";
import {FaGithub, FaHeart, FaInstagram, FaTwitter} from 'react-icons/fa'
export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-info">
        <h4> @Food-Cart 2022</h4>
         <h5>Made by Rajendra with <FaHeart /></h5>
      </div>
      <div className="social-media">
            <FaInstagram />
            <FaTwitter />
            <FaGithub />
      </div>
    </div>
  );
}
