import { createContext, useContext, useMemo, useReducer } from "react";
const AppDataContect = createContext();

// helps to understand:
// const [state, dispatch] = useReducer(reducer, initialState) !!!!!! important
// dispatch(action) --> ation = {type: TO_DO, stateChangeData?} --> in reducer --> change data

export const AppStateProvider = ({reducer, initialState = {}, children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const value = useMemo(()=>([state, dispatch] ),  [state, dispatch] )
  return <AppDataContect.Provider value={value} children={children} />;
};

//get value in consumer:  const [state, dispatch] = useContext(AppDataContect)
export const useAppState = () => {
  return useContext(AppDataContect);
};