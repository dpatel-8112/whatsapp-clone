import React from "react";
import hero from "../images/hero.png";
import style from "../css/LMenuBar.module.css";
import { AvatarURLConsumer } from "../context/AvatarURLContext";

function LMenuBar() {
  return (
    <div className={style.LMenuBarContainer}>
      {/* <h2>Left MenuBar!</h2> */}
      <div className={style.LMenuBarImageContainer}>
        <AvatarURLConsumer>
          {(avatarURL) => (
            <img src={avatarURL} alt="" className={style.Image} />
          )}
        </AvatarURLConsumer>
      </div>
      <div className={style.LMenuBarIconsContainer}>
        <span className={style.LMenuBarIcon}>⭕</span>
        <span className={style.LMenuBarIcon}>📧</span>
        <span className={style.LMenuBarIcon}>🎚</span>
      </div>
    </div>
  );
}

export default LMenuBar;
