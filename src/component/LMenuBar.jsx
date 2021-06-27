import React, { useState } from "react";
import hero from "../images/hero.png";
import style from "../css/LMenuBar.module.css";
import { CgShapeCircle } from "react-icons/cg";
import { MdMessage } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import { SignedInUserAvatarURLConsumer } from "../context/SignedInUserAvatarURLContext";
import { IsSignedInConsumer } from "../context/IsSignedInContext";

function LMenuBar({ profileOpenHandler, addFriendOpenHandler }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className={style.LMenuBarContainer}>
      {/* <h2>Left MenuBar!</h2> */}
      <div className={style.LMenuBarImageContainer}>
        <SignedInUserAvatarURLConsumer>
          {(avatarURL) => (
            <img
              onClick={() => profileOpenHandler(true)}
              src={avatarURL}
              alt=""
              className={style.Image}
            />
          )}
        </SignedInUserAvatarURLConsumer>
      </div>
      <div className={style.LMenuBarIconsContainer}>
        <span className={style.LMenuBarIcon}>
          <CgShapeCircle />
        </span>
        <span className={style.LMenuBarIcon}>
          <MdMessage />
        </span>
        <span
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className={`${style.LMenuBarIcon} ${style.LMenuBarThreeDotsIcon}`}
        >
          <BsThreeDotsVertical />
          <div
            className={`${style.LMenuBarThreeDotsIconContainer} ${
              isDropdownOpen ? style.dropDownOpen : ``
            }`}
          >
            <div
              onClick={() => profileOpenHandler(true)}
              className={style.LMenuBarThreeDotsIconItem}
            >
              Profile
            </div>
            <div
              onClick={() => addFriendOpenHandler(true)}
              className={style.LMenuBarThreeDotsIconItem}
            >
              Add Member
            </div>
            <IsSignedInConsumer>
              {(isSignedInHandler) => (
                <div
                  onClick={() => isSignedInHandler(false)}
                  className={style.LMenuBarThreeDotsIconItem}
                >
                  Log out
                </div>
              )}
            </IsSignedInConsumer>
          </div>
        </span>
      </div>
    </div>
  );
}

export default LMenuBar;
