import React, { useState } from "react";
import "../SelectUser.css";
import Nav from "./Nav";
import firebase from "../firebase/index";

const SelectViewer = () => {
  const [viewers, setViewer] = useState([]);

  const fetchViewer = () => {
    const collection = firebase.db;
    const data = collection
      .collection("users")
      .doc(/* userId */)
      .collection("viewers")
      .doc(/* viewerID */)
      .get();
  };

  return (
    <div className="wrapper">
      <Nav></Nav>
      <div className="wrapper__content">
        <h1 className="wrapper__title">Who's Watching?</h1>
        <div className="wrapper__user__row">
          <div className="wrapper__user__col">
            <img
              className="wrapper__avatar"
              src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
            ></img>
            <h3 className="wrapper__username">Torrence</h3>
          </div>
          <div className="wrapper__user__col">
            <img
              className="wrapper__avatar"
              src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
            ></img>
            <h3 className="wrapper__username">Torrence</h3>
          </div>
          <div className="wrapper__user__col">
            <img
              className="wrapper__avatar"
              src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
            ></img>
            <h3 className="wrapper__username">Torrence</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectViewer;