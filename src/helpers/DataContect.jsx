import React from "react";

const DataContext = React.createContext({
  user: "Guest",
  changeUser: () => {},
  message: null,
  changeMessage: () => {},

});

export default DataContext;
