import React, { useState } from "react";
import RChatArea from "./RChatArea";
import RMenuBar from "./RMenuBar";
import RChatBar from "./RChatBar";
import Users from "../json/users.json";

function RPanel() {
  const [chat, setChat] = useState("");

  const setChatHandler = (newChat) => {
    setChat(newChat);
    console.log(chat);
  };

  return (
    <div>
      {/* <h1>Right Panel!</h1> */}
      <RMenuBar />
      <RChatArea users={Users} />
      <RChatBar setChatHandler={setChatHandler} />
    </div>
  );
}

export default RPanel;
