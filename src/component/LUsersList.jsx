import React, { useState } from "react";
import hero from "../images/hero.png";
import style from "../css/LUsersList.module.css";
import LUser from "./LUser";
import Users from "../json/users.json";
import { SetActiveUserConsumer } from "../context/SetActiveUserContext";

function LUsersList({ userName }) {
  return (
    <div className={style.LUsersListMainContainer}>
      {Users.filter((user) => {
        if (userName == "") {
          return user;
        } else if (user.name.toLowerCase().includes(userName.toLowerCase())) {
          return user;
        }
      }).map((user, index) => (
        <LUser
          key={index}
          Uid={user.id}
          name={user.name}
          message={user.message}
          // activeUserHandler={activeUserHandler}
        />
      ))}
    </div>
  );
}

export default LUsersList;
