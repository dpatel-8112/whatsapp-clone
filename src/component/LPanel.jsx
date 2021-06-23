import React, { useEffect, useState } from "react";
import LMenuBar from "./LMenuBar";
import LSearchBar from "./LSearchBar";
import LUsersList from "./LUsersList";

function LeftPanel() {
  const [userName, setUserName] = useState("");

  const userNameHandler = (newUserName) => {
    setUserName(newUserName);
    // console.log(userName);
  };

  return (
    <div>
      {/* <h1>Left Panel</h1> */}
      <LMenuBar />
      <LSearchBar userNameHandler={userNameHandler} />
      <LUsersList userName={userName} />
    </div>
  );
}

export default LeftPanel;
