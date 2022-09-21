import React from "react";

const UserContext = React.createContext({
  name: "Guest",
  channgeUser: () => {},
});

export default UserContext;
