import React from "react";

const SignedInUserUidContext = React.createContext();

const SignedInUserUidProvider = SignedInUserUidContext.Provider;
const SignedInUserUidConsumer = SignedInUserUidContext.Consumer;

export { SignedInUserUidProvider, SignedInUserUidConsumer };
