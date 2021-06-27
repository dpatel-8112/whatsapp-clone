import style from "./css/App.module.css";
import LPanel from "./component/LPanel";
import RPanel from "./component/RPanel";
import { useState } from "react";
import { ActiveUserProvider } from "./context/ActiveUserContext";
import { SetActiveUserProvider } from "./context/SetActiveUserContext";
import { IsSignedInProvider } from "./context/IsSignedInContext";
import { SignedInUserUidProvider } from "./context/SignedInUserUidContext";
import { SignedInUserAvatarURLProvider } from "./context/SignedInUserAvatarURLContext";
import { SignedInUserEmailProvider } from "./context/SignedInUserEmailContext";
import { SignedInUserAboutProvider } from "./context/SignedInUserAboutContext";
import SignUp from "./component/SignUp";
import { SignedInUserNameProvider } from "./context/SignedInUserNameContext";

function App() {
  const [whichUserIsActive, setwhichUserIsActive] = useState(0);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [signedInUserAvatar, setSignedInUserAvatar] = useState("");
  const [signedInUserName, setSignedInUserName] = useState("");
  const [signeInUserEmail, setSigneInUserEmail] = useState("");
  const [signedInUserUid, setSignedInUserUid] = useState("");
  const [signedInUserAbout, setSignedInUserAbout] = useState("");

  const [signedInUser, setSignedInUser] = useState({});

  const setSignedInUserHandler = (newState) => {
    setSignedInUser(newState);

    setSignedInUserUid(newState.uid);
    setSignedInUserAvatar(newState.photoURL);
    setSignedInUserName(newState.displayName);
    setSigneInUserEmail(newState.email);
    console.log(newState);
  };

  const setActiveUserHandler = (newActiveUser) => {
    setwhichUserIsActive(newActiveUser);
  };

  const isSignedInHandler = (newStatus) => {
    setIsSignedIn(newStatus);
  };

  return (
    <div className={style.App}>
      {isSignedIn ? (
        <header className={style.AppHeader}>
          <div className={style.Row}>
            <SignedInUserUidProvider value={signedInUserUid}>
              <SignedInUserEmailProvider value={signeInUserEmail}>
                <SignedInUserNameProvider value={signedInUserName}>
                  <SignedInUserAvatarURLProvider value={signedInUserAvatar}>
                    <SignedInUserAboutProvider value={signedInUserAbout}>
                      <SetActiveUserProvider value={setActiveUserHandler}>
                        <IsSignedInProvider value={isSignedInHandler}>
                          <div className={`${style.Column} ${style.Left}`}>
                            <LPanel />
                          </div>
                        </IsSignedInProvider>
                      </SetActiveUserProvider>
                    </SignedInUserAboutProvider>
                  </SignedInUserAvatarURLProvider>
                </SignedInUserNameProvider>

                <ActiveUserProvider value={whichUserIsActive}>
                  <div className={`${style.Column} ${style.Right}`}>
                    <RPanel />
                  </div>
                </ActiveUserProvider>
              </SignedInUserEmailProvider>
            </SignedInUserUidProvider>
          </div>
        </header>
      ) : (
        <SignUp
          setSignedInUserHandler={setSignedInUserHandler}
          isSignedInHandler={isSignedInHandler}
        />
      )}
    </div>
  );
}

export default App;
