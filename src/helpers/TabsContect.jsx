import {createContext} from "react";

const TabsContext = createContext({
  index: 0,
  setIndex: ()=>{}

});

export default TabsContext;
