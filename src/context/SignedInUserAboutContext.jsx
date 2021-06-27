import React from "react";

const SignedInUserAboutContext = React.createContext();

const SignedInUserAboutProvider = SignedInUserAboutContext.Provider;
const SignedInUserAboutConsumer = SignedInUserAboutContext.Consumer;

export { SignedInUserAboutProvider, SignedInUserAboutConsumer };
