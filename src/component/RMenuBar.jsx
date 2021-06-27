import React from "react";
import hero from "../images/hero.png";
import style from "../css/LMenuBar.module.css";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";

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
        <span className={style.LMenuBarIcon}>
          <BiSearchAlt2 />
        </span>

        <span className={style.LMenuBarIcon}>
          {" "}
          <BsThreeDotsVertical />
        </span>
      </div>
    </div>
  );
}

export default RMenuBar;
