import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./Nav.css";
import netflixLogo from "../netflix.png";

function Nav() {
  const [show, handleShow] = useState(false);
  const history = useHistory();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    // return () => {
    //   window.removeEventListener("scroll");
    // };
  }, []);
  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        onClick={() => history.push("/")}
        className="nav__logo"
        src={netflixLogo}
        alt="Natflix logo"
      />
      <img
        onClick={() => history.push("/profile")}
        className="nav__avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="avatar logo"
      />
    </div>
  );
}
export default Nav;
