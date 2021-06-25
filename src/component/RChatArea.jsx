import React, { useState } from "react";
import style from "../css/RChatArea.module.css";
import RChats from "./RChats";

function RChatArea({ newChat, user }) {
  return (
    <div className={style.RChatAreaMainContainer}>
      <div
        style={{
          maxHeight: "73vh",
          position: "absolute",
          bottom: "10px",
          right: " 0px",
        }}
      >
        <RChats newChat={newChat} user={user} />
      </div>
    </div>
  );
}

export default RChatArea;
