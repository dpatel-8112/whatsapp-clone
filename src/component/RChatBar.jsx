import React, { useEffect, useState } from "react";
import style from "../css/LSearchBar.module.css";

function RChatBar({ setChatHandler }) {
  const [chat, setChat] = useState("");

  const userChatHandler = (e) => {
    // console.log(e.target.value);
    setChat(e.target.value);
  };

  useEffect(() => {
    setChatHandler(chat);
    return () => {};
  }, [chat]);

  return (
    <>
      <div className={style.LSearchBarContainer}>
        <div className={style.RChatBarContainer}>
          <div className={style.RChatBarIconContainer}>
            <span className={style.RChatBarIcon}>😀</span>
            <span className={style.RChatBarIcon}>📌</span>
          </div>
          <div className={style.RChatBar}>
            <input
              onChange={userChatHandler}
              className={style.RChatBarInput}
              type="text"
              placeholder="Type a message"
            />
          </div>
          <span
            style={{ marginRight: "10px", fontSize: "22px" }}
            className={style.RChatBarIcon}
          >
            🔴
          </span>
        </div>
      </div>
    </>
  );
}

export default RChatBar;
