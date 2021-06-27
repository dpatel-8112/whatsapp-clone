import React, { useState } from "react";
import hero from "../images/hero.png";
import style from "../css/LUsersList.module.css";
import { SetActiveUserConsumer } from "../context/SetActiveUserContext";
import { SignedInUserAvatarURLConsumer } from "../context/SignedInUserAvatarURLContext";

function LUser({ name, email, message, avatar }) {
  // console.log(users);

  return (
    <>
      <SetActiveUserConsumer>
        {(setActiveUserHandler) => {
          return (
            <div
              onClick={(e) => setActiveUserHandler(e.currentTarget.id)}
              className={style.LUsersListContainer}
              // id={Uid}
            >
              <div className={style.LUsersListImageContainer}>
                <img src={avatar} alt="" className={style.LUsersListImage} />
              </div>
              <div className={style.LUsersListTextContainer}>
                <div className={style.LUsersListTextTitle}>{name}</div>
                <span className={style.LUsersListTextDate}>12/06/2021</span>
                <div className={style.LUsersListTextMessage}>{email}</div>
                <span className={style.LUsersListTextBadge}>255</span>
              </div>
            </div>
          );
        }}
      </SetActiveUserConsumer>

      <div className={style.horizontalLine}></div>
    </>
  );
}

export default LUser;
