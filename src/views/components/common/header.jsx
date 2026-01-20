import { useState } from "react";
import Soundcloud from "../../../assets/images/icos/soundcloud.png";
import Instagram from "../../../assets/images/icos/instagram.png";
import Facebook from "../../../assets/images/icos/facebook.png";
import Youtube from "../../../assets/images/icos/youtube.png";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const [menuActive, setMenuActive] = useState(false);

  const ContactNav = () => {
    navigate("/contact");
  };

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header className="header flex">
      <nav className="header__socials">
        <ul className="header__socials__list flex">
          <a
            className="header__socials__list-item flex"
            href="https://soundcloud.com/eventazzo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Soundcloud} alt="soundcloud" />
          </a>
          <a
            className="header__socials__list-item flex"
            href="https://www.instagram.com/eventazzo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Instagram} alt="instagram" />
          </a>
          <a
            className="header__socials__list-item flex"
            href="https://www.facebook.com/eventazzo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Facebook} alt="facebook" />
          </a>
          <a
            className="header__socials__list-item flex"
            href="https://www.youtube.com/@eventazzo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Youtube} alt="youtube" />
          </a>
        </ul>
      </nav>

      <nav className="hamburguerMenu">
        <div className="hamburguerMenu-item flex" onClick={toggleMenu}>
          <div
            className={`hamburguerMenu-item--bar ${menuActive ? "active" : ""}`}
          ></div>
          <div
            className={`hamburguerMenu-item--bar ${menuActive ? "active" : ""}`}
          ></div>
          <div
            className={`hamburguerMenu-item--bar ${menuActive ? "active" : ""}`}
          ></div>
        </div>
      </nav>

      <nav className={`overlayMenu flex ${menuActive ? "active" : ""}`}>
        <ul className="overlayMenu__list flex">
          <li className="overlayMenu__list-item" onClick={ContactNav}>
            Contratar
          </li>
        </ul>
      </nav>
    </header>
  );
}
