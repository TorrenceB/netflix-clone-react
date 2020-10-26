import React from "react";
import "../Nav.css";

const Nav = () => {
  return (
    <div className="nav">
      <img
        className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
      ></img>
      {/* <img
        className="nav__avatar"
        src="https://external-preview.redd.it/nj1LJGpHx7g_xz8VUhHWx0UgAZ2jVtyRoMDXJ7c7m2g.gif?format=png8&s=3c378f3cf1a9590dda0b3b3ddbf75647f9ec2987"
        alt="Logo"
      /> */}
    </div>
  );
};

export default Nav;
