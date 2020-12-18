import React, { useState, useEffect } from "react";
import "../SelectUser.css";
import Nav from "./Nav";
import firebase from "../firebase/index";
import { ReactComponent as AddIcon } from "../assets/add_circle-24px.svg";

import { Link } from "react-router-dom";

const SelectViewer = ({ viewHandler }) => {
  const [viewers, setViewers] = useState([]);

  useEffect(() => {
    // TODO: Need unsubcribe callback()
    const instance = firebase.db;
    const unsubcribe = instance
      .collection("users")
      .doc("wKhE5XNt4GwNJZLuAuNl")
      .collection("viewers")
      .onSnapshot((snapshot) => {
        const fetchViewers = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setViewers(fetchViewers);
      });

    return () => unsubcribe();
  }, [viewers]);

  const addProfileHandler = () => {
    console.log("Add profile clicked!");
  };

  return (
    <div className="wrapper">
      <Nav></Nav>
      <div className="wrapper__content">
        <h1 className="wrapper__title">Who's Watching?</h1>
        <div className="wrapper__user__row">
          {viewers.map((viewer) => {
            return (
              <div key={viewer.id} className="wrapper__user__col">
                {/* Todo: Add effects between page transition */}
                <Link to="/main">
                  <img
                    onClick={viewHandler}
                    className="wrapper__avatar"
                    src={viewer.avatarUrl}
                  ></img>
                </Link>
                <h3 className="wrapper__username">{viewer.viewerName}</h3>
              </div>
            );
          })}
          <div className="wrapper__user__col">
            <AddIcon
              onClick={addProfileHandler}
              className="wrapper__icon"
            ></AddIcon>
            <h3 className="wrapper__username">Add Profile</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectViewer;
