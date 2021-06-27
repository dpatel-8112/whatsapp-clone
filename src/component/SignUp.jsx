import React, { useState } from "react";
import firebase from "firebase";
import "../database/firebase";

function SignUp({ setSignedInUserHandler, isSignedInHandler }) {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const signUpHandler = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        setIsSignedIn(true);
        isSignedInHandler(true);
        setSignedInUserHandler(result.user);

        firebase
          .database()
          .ref("users/" + result.user.uid)
          .set({
            name: result.user.displayName,
            email: result.user.email,
            profile_picture: result.user.photoURL,
            about: "I am not using Whatsapp",
          });

        // console.log(result.user);
        // console.log(result.user.displayName);
        // console.log(result.user.email);
        // console.log(result.user.photoURL);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const signOutHandler = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        setIsSignedIn(false);
        isSignedInHandler(false);
        console.log("Sign Out Successful");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div>
        <button
          onClick={isSignedIn ? signOutHandler : signUpHandler}
          style={{
            // display: "flex",
            marginTop: "100px",
            justifyContent: "center",
            alignItems: "center",
            height: "100px",
            width: "200px",
            border: "3px solid green",
            fontSize: "24px",
            backgroundColor: "lightblue",
            fontWeight: "bolder",
            fontFamily: "cursive",
            cursor: "pointer",
          }}
        >
          {isSignedIn ? "SignOut" : "SignIn"}
        </button>
      </div>
    </div>
  );
}

export default SignUp;
