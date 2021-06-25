import React from "react";

const SetActiveUserContext = React.createContext();

const SetActiveUserProvider = SetActiveUserContext.Provider;
const SetActiveUserConsumer = SetActiveUserContext.Consumer;

export { SetActiveUserProvider, SetActiveUserConsumer };
