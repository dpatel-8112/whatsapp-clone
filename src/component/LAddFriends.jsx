import React, { useState } from "react";
import style from "../css/LProfile.module.css";
import { BiArrowBack } from "react-icons/bi";
import firebase from "firebase";
import { SignedInUserUidConsumer } from "../context/SignedInUserUidContext";

function LAddFriends({ addFriendOpenHandler }) {
  const [addFriendSearching, setAddFriendSearching] = useState("");
  const [searchingList, setSearchingList] = useState([]);
  const [myUid, setMyUid] = useState("");

  var addFriends = firebase.database().ref("users/" + addFriendSearching);

  const addFriendSearchingHandler = (e) => {
    setAddFriendSearching(e.target.value);

    addFriends.on("value", (snapshot) => {
      const data = snapshot.val();
      if (data != null) {
        setSearchingList([
          {
            name: data.name,
            email: data.email,
          },
        ]);
      }
      // console.log(data);
      // console.log(addFriendSearching);
    });
  };

  const addFriendHandler = () => {
    firebase
      .database()
      .ref("users/" + myUid + "/contacts/" + addFriendSearching)
      .set({
        name: searchingList[0].name,
        email: searchingList[0].email,
      });

    setAddFriendSearching("");

    // console.log(searchingList[0].email);
  };

  return (
    <div className={style.LProfileMainContainer}>
      <SignedInUserUidConsumer>
        {(uid) => setMyUid(uid)}
      </SignedInUserUidConsumer>

      <div className={style.LProfileContainer}>
        <div className={style.LProfileBackButtonContainer}>
          <span className={style.LProfileBackButton}>
            <span onClick={() => addFriendOpenHandler(false)}>
              <BiArrowBack />
            </span>
            <span>Add Friends</span>
          </span>
        </div>

        <div style={{ width: "100%" }} className={style.LProfileUserInfo}>
          <div
            style={{ textAlign: "left" }}
            className={style.LProfileUserInfoNameContainer}
          >
            <input
              onChange={addFriendSearchingHandler}
              value={addFriendSearching}
              placeholder="Type Email id . . . "
              style={{
                width: "90%",
                borderBottom: "1px solid rgba(255,255,255,0.5)",
              }}
              type="text"
            />
          </div>

          <div className={style.LAddFriendList}>
            {searchingList.map((user) => (
              <div
                onClick={addFriendHandler}
                data-value={user}
                className={style.LAddFriendListItem}
              >
                <span>{user.name}</span>
                <span>{user.email}</span>
              </div>
            ))}
          </div>
          <div className={style.horizontalLine}></div>
        </div>
      </div>
    </div>
  );
}

export default LAddFriends;
