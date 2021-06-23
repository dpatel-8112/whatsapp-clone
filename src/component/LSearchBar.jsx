import React, { useState, useEffect } from "react";
import style from "../css/LSearchBar.module.css";

function LSearchBar({ userNameHandler }) {
  const [name, setName] = useState("");

  const nameSearchHandler = (e) => {
    setName(e.target.value);
    // userNameHandler(name);
    // console.log(e.target.value);
  };

  useEffect(() => {
    userNameHandler(name);
    return () => {};
  }, [name]);

  return (
    <>
      <div className={style.LSearchBarContainer}>
        <div className={style.LSearchBar}>
          <span className={style.LSearchBarIcon}>🔍</span>
          <input
            onChange={nameSearchHandler}
            value={name}
            className={style.LSearchBarInput}
            type="text"
            placeholder="Search or start new chat"
          />
        </div>
      </div>
      <div className={style.horizontalLine}></div>
    </>
  );
}

export default LSearchBar;
