import style from "./css/App.module.css";
import LPanel from "./component/LPanel";
import RPanel from "./component/RPanel";
import { useState } from "react";
import { ActiveUserProvider } from "./context/ActiveUserContext";
import { SetActiveUserProvider } from "./context/SetActiveUserContext";
import { AvatarURLProvider } from "./context/AvatarURLContext";
import SignUp from "./component/SignUp";

function App() {
  const [whichUserIsActive, setwhichUserIsActive] = useState(0);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [avatar, setAvatar] = useState("");

  const setActiveUserHandler = (newActiveUser) => {
    setwhichUserIsActive(newActiveUser);
  };

  const isSignedInHandler = (newStatus) => {
    setIsSignedIn(newStatus);
  };

  const avatarHandler = (avatarURL) => {
    setAvatar(avatarURL);
  };

  return (
    <div className={style.App}>
      {isSignedIn ? (
        <header className={style.AppHeader}>
          <div className={style.Row}>
            <AvatarURLProvider value={avatar}>
              <SetActiveUserProvider value={setActiveUserHandler}>
                <div className={`${style.Column} ${style.Left}`}>
                  <LPanel />
                </div>
              </SetActiveUserProvider>
              <ActiveUserProvider value={whichUserIsActive}>
                <div className={`${style.Column} ${style.Right}`}>
                  <RPanel />
                </div>
              </ActiveUserProvider>
            </AvatarURLProvider>
          </div>
        </header>
      ) : (
        <SignUp
          isSignedInHandler={isSignedInHandler}
          avatarHandler={avatarHandler}
        />
      )}
    </div>
  );
}

export default App;
