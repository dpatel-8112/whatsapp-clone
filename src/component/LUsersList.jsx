import React, { useState, useEffect } from "react";
import hero from "../images/hero.png";
import style from "../css/LUsersList.module.css";
import LUser from "./LUser";
import Users from "../json/users.json";

function LUsersList({ userName }) {
  console.log(userName);
  return (
    <div className={style.LUsersListMainContainer}>
      {Users.filter((user) => {
        if (userName == "") {
          return user;
        } else if (user.name.toLowerCase().includes(userName.toLowerCase())) {
          return user;
        }
      }).map((user, index) => (
        <LUser key={index} name={user.name} message={user.message} />
      ))}
    </div>
  );
}

export default LUsersList;
