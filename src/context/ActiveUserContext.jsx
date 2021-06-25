import React from "react";

const ActiveUser = React.createContext();

const ActiveUserProvider = ActiveUser.Provider;
const ActiveUserConsumer = ActiveUser.Consumer;

export { ActiveUserProvider, ActiveUserConsumer };
