import { useState, useEffect } from "react";
import FetchService from "../../services/FetchService";
import { useAppState } from "../../state/app-state";


const useUserWords = () => {
  //Lazy
  const [state, dispatch] = useAppState();
  const setLoading = () => (state.isAuth ? true : false)

  const [userWords, setUserWords] = useState([]);
  const [isLoading, setIsLoading] = useState(setLoading());

  useEffect(() => {
    let isCurrent = true;
    if (state.isAuth) {    
      FetchService.loadUserWords(state.userData).then((data) => {
        if (isCurrent) {
          setUserWords(data);
          setIsLoading(false);
          dispatch({ type: "LOAD_USER_WORDS", userWords:  data}); 
         
        }
      });
    }
    return () => {
      //  setIsLoading(true);
      isCurrent = false;
    };
  }, [state.isAuth, state.userWordsTotal ]);
  return [userWords, isLoading];
};
export default useUserWords;
