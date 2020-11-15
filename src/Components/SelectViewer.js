import React, { useState, useEffect } from "react";
import "../SelectUser.css";
import Nav from "./Nav";
import firebase from "../firebase/index";
import { ReactComponent as AddIcon } from "../assets/add_circle-24px.svg";

const SelectViewer = () => {
  const [viewers, setViewers] = useState([]);

  useEffect(() => {
    // TODO: Need unsubcribe callback()
    const instance = firebase.db;
    const data = instance
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
  }, []);

  const addProfileHandler = () => {
    console.log('Add profile clicked!');
  }

  return (
    <div className="wrapper">
      <Nav></Nav>
      <div className="wrapper__content">
        <h1 className="wrapper__title">Who's Watching?</h1>
        <div className="wrapper__user__row">
          {viewers.map((viewer) => {
            return (
              <div key={viewer.id} className="wrapper__user__col">
                <img className="wrapper__avatar" src={viewer.avatarUrl}></img>
                <h3 className="wrapper__username">{viewer.viewerName}</h3>
              </div>
            );
          })}
          <div className="wrapper__user__col">
            <AddIcon onClick={addProfileHandler} className="wrapper__icon"></AddIcon>
            <h3 className="wrapper__username">Add Profile</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectViewer;
