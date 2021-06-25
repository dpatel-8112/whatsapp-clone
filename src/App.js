import style from "./css/App.module.css";
import LPanel from "./component/LPanel";
import RPanel from "./component/RPanel";
import { useState } from "react";
import { ActiveUserProvider } from "./context/ActiveUserContext";
import { SetActiveUserProvider } from "./context/SetActiveUserContext";

function App() {
  const [whichUserIsActive, setwhichUserIsActive] = useState(0);

  const setActiveUserHandler = (newActiveUser) => {
    setwhichUserIsActive(newActiveUser);
  };

  return (
    <div className={style.App}>
      <header className={style.AppHeader}>
        <div className={style.Row}>
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
        </div>
      </header>
    </div>
  );
}

export default App;
