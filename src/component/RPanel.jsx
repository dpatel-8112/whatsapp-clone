import React, { useState } from "react";
import RHomePage from "./RHomePage";
import RNoHomePage from "./RNoHomePage";
import { ActiveUserConsumer } from "../context/ActiveUserContext";

function RPanel() {
  return (
    <div>
      {/* <h1>Right Panel!</h1> */}
      <ActiveUserConsumer>
        {(activeUser) => {
          return activeUser === 0 ? (
            <RHomePage />
          ) : (
            <RNoHomePage activeUser={activeUser} />
          );
        }}
      </ActiveUserConsumer>
    </div>
  );
}

export default RPanel;
