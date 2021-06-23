import style from "./css/App.module.css";
import LPanel from "./component/LPanel";
import RPanel from "./component/RPanel";

function App() {
  return (
    <div className={style.App}>
      <header className={style.AppHeader}>
        <div className={style.Row}>
          <div className={`${style.Column} ${style.Left}`}>
            <LPanel />
          </div>
          <div className={`${style.Column} ${style.Right}`}>
            <RPanel />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
