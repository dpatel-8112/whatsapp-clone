import React from "react";
import LMenuBar from "./LMenuBar";
import LSearchBar from "./LSearchBar";
import LUsersList from "./LUsersList";

function LNoProfile({
  userNameHandler,
  userName,
  profileOpenHandler,
  addFriendOpenHandler,
}) {
  return (
    <>
      <LMenuBar
        addFriendOpenHandler={addFriendOpenHandler}
        profileOpenHandler={profileOpenHandler}
      />
      <LSearchBar userNameHandler={userNameHandler} />
      <LUsersList userName={userName} />
    </>
  );
}

export default LNoProfile;
