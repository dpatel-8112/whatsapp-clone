import React, { useState, useLayoutEffect, useEffect } from "react";
import hero from "../images/hero.png";
import style from "../css/LUsersList.module.css";
import LUser from "./LUser";
import Users from "../json/users.json";
import firebase from "firebase";
import { SignedInUserUidConsumer } from "../context/SignedInUserUidContext";
import { SetActiveUserConsumer } from "../context/SetActiveUserContext";

function LUsersList({ userName }) {
  const [users, setUsers] = useState([]);
  const [myUid, setMyUid] = useState("");
  const dbRef = firebase.database().ref("users/");

  const usersRenderingHandler = () => {
    dbRef
      .get()
      .then((snapshot) => {
        if (snapshot.exists()) {
          snapshot.forEach((childSnapshot) => {
            // console.log(childSnapshot.val().name);
            console.log("3");

            setUsers([
              ...users,
              {
                name: childSnapshot.val().name,
                email: childSnapshot.val().email,
                avatar: childSnapshot.val().profile_picture,
              },
            ]);

            // name: childSnapshot.val().name,
            // email: childSnapshot.val().email,
            // avatar: childSnapshot.val().profile_picture,
          });
          console.log("4");
          // console.log(users);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    usersRenderingHandler();
    return () => {};
  }, []);

  return (
    <div className={style.LUsersListMainContainer}>
      {/* {users ? <LUser users={users} /> : ""} */}

      <SignedInUserUidConsumer>
        {(uid) => setMyUid(uid)}
      </SignedInUserUidConsumer>
      {users != null
        ? users
            .filter((user) => {
              if (userName == "") {
                return user;
              } else if (
                user.name.toLowerCase().includes(userName.toLowerCase())
              ) {
                return user;
              }
            })
            .map((user, index) => (
              <LUser
                key={user.email}
                // Uid={user.id}
                name={user.name}
                email={user.email}
                message={user.avatar}
                avatar={user.avatar}
                // activeUserHandler={activeUserHandler}
              />
            ))
        : ""}
    </div>
  );
}

export default LUsersList;
