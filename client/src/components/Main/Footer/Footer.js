import React from "react";
import classes from "./Footer.module.css";

function Footer() {
  return (
    <div className={classes.footers}>
      <p>Sign up for our news letter</p>
      <p>Subscribe to know about our product launches, features, etc.</p>
      <div className={classes.social_media}>
        <a href="">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="">
          <i className="fab fa-whatsapp"></i>
        </a>
      </div>
      <br></br>
      <div className={classes.contact}>
        <a href="">Contact Us</a>
        <a href="">About Us</a>
      </div>
    </div>
  );
}

export default Footer;
