import React from "react";

const SignedInUserNameContext = React.createContext();

const SignedInUserNameProvider = SignedInUserNameContext.Provider;
const SignedInUserNameConsumer = SignedInUserNameContext.Consumer;

export { SignedInUserNameProvider, SignedInUserNameConsumer };
