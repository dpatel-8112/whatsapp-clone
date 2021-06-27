import React, { useState } from "react";
import RChatArea from "./RChatArea";
import RMenuBar from "./RMenuBar";
import RChatBar from "./RChatBar";
import Users from "../json/users.json";

function RNoHomePage({ activeUser }) {
  const [chat, setChat] = useState("");

  const setChatHandler = (newChat) => {
    setChat(newChat);
    // console.log(chat);
  };

  const activeUserFullBody = Users.filter((user) => {
    // if (activeUser == user.id) {
    return user;
    // }
  });

  return (
    <div>
      <RMenuBar userName={activeUserFullBody[0].name} />

      <RChatArea newChat={chat} user={activeUserFullBody} />
      <RChatBar setChatHandler={setChatHandler} />
    </div>
  );
}

export default RNoHomePage;
