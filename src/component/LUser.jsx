import React from "react";
import hero from "../images/hero.png";
import style from "../css/LUsersList.module.css";

function LUser({ key, name, message }) {
  return (
    <>
      <div className={style.LUsersListContainer}>
        <div className={style.LUsersListImageContainer}>
          <img src={hero} alt="" className={style.LUsersListImage} />
        </div>
        <div className={style.LUsersListTextContainer}>
          <div className={style.LUsersListTextTitle}>{name}</div>
          <span className={style.LUsersListTextDate}>12/06/2021</span>
          <div className={style.LUsersListTextMessage}>
            {message.slice(0, 25)} ...
          </div>
          <span className={style.LUsersListTextBadge}>255</span>
        </div>
      </div>
      <div className={style.horizontalLine}></div>
    </>
  );
}

export default LUser;
