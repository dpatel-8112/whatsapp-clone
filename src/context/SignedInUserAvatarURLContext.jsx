import React from "react";

const SignedInUserAvatarURLContext = React.createContext();

const SignedInUserAvatarURLProvider = SignedInUserAvatarURLContext.Provider;
const SignedInUserAvatarURLConsumer = SignedInUserAvatarURLContext.Consumer;

export { SignedInUserAvatarURLProvider, SignedInUserAvatarURLConsumer };
