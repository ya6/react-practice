import {createContext} from "react";

const DataContext = createContext({
  user: "Guest",
  changeUser: () => {},
  message: null,
  changeMessage: () => {},

});

export default DataContext;
