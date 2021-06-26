import React from "react";

const AvatarURLContext = React.createContext();

const AvatarURLProvider = AvatarURLContext.Provider;
const AvatarURLConsumer = AvatarURLContext.Consumer;

export { AvatarURLProvider, AvatarURLConsumer };
