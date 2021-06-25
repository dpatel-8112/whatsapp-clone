import React from "react";
import homepageImage from "../images/homepage.png";
import style from "../css/RHomePage.module.css";

function RHomePage() {
  return (
    <div className={style.HomePageContainer}>
      <img className={style.HomepageImage} src={homepageImage} alt="" />
      <div className={style.HomepageHeading}>Keep your phone connected</div>
      <p className={style.HomepageParagraph}>
        WhatsApp connect to your phone to sync message. To reduce data usage
        connect your phone to Wi-Fi.
      </p>
      <div className={style.horizontalLine}></div>

      <div className={style.HomepageWindowDownload}>
        <span>💻</span>WhatsApp is available for Wndow.{" "}
        <a href="">Get it here.</a>
      </div>
    </div>
  );
}

export default RHomePage;
