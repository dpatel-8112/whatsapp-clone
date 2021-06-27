import React from "react";
import style from "../css/LProfile.module.css";
import { BiArrowBack } from "react-icons/bi";
import { SignedInUserAvatarURLConsumer } from "../context/SignedInUserAvatarURLContext";
import { SignedInUserAboutConsumer } from "../context/SignedInUserAboutContext";
import { SignedInUserNameConsumer } from "../context/SignedInUserNameContext";
import { SignedInUserEmailConsumer } from "../context/SignedInUserEmailContext";
import { SignedInUserUidConsumer } from "../context/SignedInUserUidContext";

function LProfile({ profileOpenHandler }) {
  return (
    <div className={style.LProfileMainContainer}>
      <div className={style.LProfileContainer}>
        <div className={style.LProfileBackButtonContainer}>
          <span className={style.LProfileBackButton}>
            <span onClick={() => profileOpenHandler(false)}>
              <BiArrowBack />
            </span>
            <span>Profile</span>
          </span>
        </div>
        <div className={style.LProfileImageContainer}>
          <SignedInUserAvatarURLConsumer>
            {(avatar) => (
              <img className={style.LProfileImage} src={avatar} alt="" />
            )}
          </SignedInUserAvatarURLConsumer>
        </div>

        <div className={style.LProfileUserInfo}>
          <div className={style.LProfileUserInfoNameContainer}>
            <div className={style.LProfileUserInfoName}>Your Name</div>
            <SignedInUserNameConsumer>
              {(name) => <input type="text" value={name} />}
            </SignedInUserNameConsumer>
          </div>
          <div className={style.horizontalLine}></div>
          <div className={style.LProfileUserInfoNote}>
            <div>
              This is not your username or pin. This name will be visible to
              your WhatsApp contacts.
            </div>
          </div>
          <div className={style.LProfileUserInfoAboutContainer}>
            <div className={style.LProfileUserInfoAboutHeading}>About</div>
            <SignedInUserUidConsumer>
              {(uid) => <div style={{ userSelect: "text" }}>UID : {uid} </div>}
            </SignedInUserUidConsumer>
            <SignedInUserEmailConsumer>
              {(email) => <div>Email : {email}</div>}
            </SignedInUserEmailConsumer>
            <SignedInUserAboutConsumer>
              {(about) => {
                <div className={style.LProfileUserInfoAbout}>{about}</div>;
              }}
            </SignedInUserAboutConsumer>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LProfile;
