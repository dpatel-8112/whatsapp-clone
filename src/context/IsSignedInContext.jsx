import React from "react";

const IsSignedInContext = React.createContext();

const IsSignedInProvider = IsSignedInContext.Provider;
const IsSignedInConsumer = IsSignedInContext.Consumer;

export { IsSignedInProvider, IsSignedInConsumer };
