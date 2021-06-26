import React, { useState } from "react";
import hero from "../images/hero.png";
import style from "../css/LUsersList.module.css";
import { SetActiveUserConsumer } from "../context/SetActiveUserContext";
import { AvatarURLConsumer } from "../context/AvatarURLContext";

function LUser({ key, Uid, name, message, activeUserHandler }) {
  return (
    <>
      <SetActiveUserConsumer>
        {(setActiveUserHandler) => {
          return (
            <div
              onClick={(e) => setActiveUserHandler(e.currentTarget.id)}
              className={style.LUsersListContainer}
              id={Uid}
            >
              <div className={style.LUsersListImageContainer}>
                <AvatarURLConsumer>
                  {(avatarURL) => (
                    <img
                      src={avatarURL}
                      alt=""
                      className={style.LUsersListImage}
                    />
                  )}
                </AvatarURLConsumer>
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
          );
        }}
      </SetActiveUserConsumer>

      <div className={style.horizontalLine}></div>
    </>
  );
}

export default LUser;
