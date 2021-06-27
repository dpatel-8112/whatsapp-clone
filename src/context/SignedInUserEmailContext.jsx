import React from "react";

const SignedInUserEmailContext = React.createContext();

const SignedInUserEmailProvider = SignedInUserEmailContext.Provider;
const SignedInUserEmailConsumer = SignedInUserEmailContext.Consumer;

export { SignedInUserEmailProvider, SignedInUserEmailConsumer };
