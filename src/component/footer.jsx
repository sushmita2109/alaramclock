import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./styles/footer.css";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footerHeader">
        Follow us on
        <a
          href="https://www.facebook.com/sushmita.kumari"
          target="_blank"
          className="facebooksocial"
        >
          <FontAwesomeIcon color="white" icon={faFacebook} size="2x" />
        </a>
        <a
          href="https://twitter.com/Sushmit10759660"
          target="_blank"
          className="twittersocial"
        >
          <FontAwesomeIcon color="white" icon={faTwitter} size="2x" />
        </a>
        <a
          href="https://www.instagram.com/sushmitakumari94/"
          target="_blank"
          className="instagramsocial"
        >
          <FontAwesomeIcon color="white" icon={faInstagram} size="2x" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
