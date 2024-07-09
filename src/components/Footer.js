import React from "react";
import "../styles/Footer.css"
import twitter from "../images/twitter.png"
import instagram from "../images/instagram.png"

function Footer() {
  return (
    <div className="Footer">
      <p>&copy; 2024 Company. All rights reserved.</p>
      <div className="Socials">
        <p>Reach us:</p>
        <img className="socialsImg" src={twitter}/>
        <img className="socialsImg" src={instagram}/>
      </div>
    </div>
  );
}

export default Footer;