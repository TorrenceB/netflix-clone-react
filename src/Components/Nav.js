import React, { useEffect, useState } from "react";
import "../Nav.css";

const Nav = ({ showAvatar }) => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", () =>
        console.log("Scroll listener removed...")
      );
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
      ></img>
      {showAvatar && (
        <img
          className="nav__avatar"
          src="https://pkimgcdn.peekyou.com/ff7255f405565b8db82899261fc95db6.jpeg"
          alt="Logo"
        />
      )}
    </div>
  );
};

export default Nav;
