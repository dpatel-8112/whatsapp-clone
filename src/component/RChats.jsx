import React from "react";
import style from "../css/RChatArea.module.css";

function RChats({ message }) {
  return (
    <div>
      <div className={style.chat}>
        <span>{message}</span>
        <div></div>
      </div>
    </div>
  );
}

export default RChats;
