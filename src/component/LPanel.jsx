import React, { useEffect, useState } from "react";
import LAddFriends from "./LAddFriends";
import LNoProfile from "./LNoProfile";
import LProfile from "./LProfile";

function LeftPanel() {
  const [userName, setUserName] = useState("");
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isAddFriendOpen, setIsAddFriendOpen] = useState(false);

  const profileOpenHandler = (newState) => {
    setIsProfileOpen(newState);
  };

  const addFriendOpenHandler = (newState) => {
    setIsAddFriendOpen(newState);
  };

  const userNameHandler = (newUserName) => {
    setUserName(newUserName);
    // console.log(userName);
  };

  return (
    <div>
      {isProfileOpen ? (
        <LProfile profileOpenHandler={profileOpenHandler} />
      ) : isAddFriendOpen ? (
        <LAddFriends addFriendOpenHandler={addFriendOpenHandler} />
      ) : (
        <LNoProfile
          addFriendOpenHandler={addFriendOpenHandler}
          profileOpenHandler={profileOpenHandler}
          userNameHandler={userNameHandler}
          userName={userName}
        />
      )}
    </div>
  );
}

export default LeftPanel;
