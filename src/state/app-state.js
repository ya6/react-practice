import { createContext, useContext, useReducer } from "react";
const AppDataContect = createContext();

// help to understand:
// const [state, dispatch] = useReducer(reducer, initialState) !!!!!! important
// dispatch(action) --> ation = {type: TO_DO, stateChangeData?} --> in reducer --> change data

export const AppStateProvider = ({reducer, initialState = {}, children }) => {
    const value = useReducer(reducer, initialState)
  return <AppDataContect.Provider value={value} children={children} />;
};

//get value in consumer:  const [state, dispatch] = useContext(AppDataContect)
export const useAppState = () => {
  return useContext(AppDataContect);
};
