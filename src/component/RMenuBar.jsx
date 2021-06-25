import React from "react";
import hero from "../images/hero.png";
import style from "../css/LMenuBar.module.css";

function RMenuBar({ userName }) {
  return (
    <div className={style.LMenuBarContainer}>
      {/* <h2>Left MenuBar!</h2> */}
      <div
        style={{ display: "flex", alignItems: "center" }}
        className={style.LMenuBarImageContainer}
      >
        <img src={hero} alt="" className={style.Image} />
        <span className={style.RMenuBarTextTitle}>{userName}</span>
      </div>

      <div className={style.LMenuBarIconsContainer}>
        <span className={style.LMenuBarIcon}>🔍</span>

        <span className={style.LMenuBarIcon}>🎚</span>
      </div>
    </div>
  );
}

export default RMenuBar;
