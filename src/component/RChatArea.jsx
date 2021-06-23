import React from "react";
import style from "../css/RChatArea.module.css";
import RChats from "./RChats";

function RChatArea({ users }) {
  console.log(users);
  return (
    <div className={style.RChatAreaMainContainer}>
      <div>
        {users.map((user, index) => (
          <RChats message={user.company.bs} />
        ))}
      </div>
    </div>
  );
}

export default RChatArea;
