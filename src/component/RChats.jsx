import React from "react";
import style from "../css/RChatArea.module.css";

function RChats({ newChat, user }) {
  // console.log(user);
  return (
    <div>
      <div className={style.chat}>
        <span>ID : {user[0].id}</span>
        <div></div>
      </div>
      <div className={style.chat}>
        <span>Name : {user[0].name}</span>
        <div></div>
      </div>
      <div className={style.chat}>
        <span>UserName : {user[0].username}</span>
        <div></div>
      </div>
      <div className={style.chat}>
        <span>Message : {user[0].message}</span>
        <div></div>
      </div>
      <div className={style.chat}>
        <span>New Meesage : {newChat}</span>
        <div></div>
      </div>
    </div>
  );
}

export default RChats;
