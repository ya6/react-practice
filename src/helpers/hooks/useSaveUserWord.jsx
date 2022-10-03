import { useState, useEffect } from "react";
import FetchService from "../../services/FetchService";
import { useAppState } from "../../state/app-state";

const useUsersWords = (word, wordData) => {
  const [userWord, setUserWord] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [state, dispatch] = useAppState();
 
  useEffect(() => {
    let isCurrent = true;
    if ((word, wordData)) {
      FetchService.saveUserWord(state.userData, word, wordData).then((data) => {
        if (isCurrent) {
          setUserWord(data);
          setIsLoading(false);
          dispatch({ type: "ADD_USER_WORD" , message: word.word}); 
        }
      });
    }

    return () => {
      setIsLoading(true);
      isCurrent = false;
    };
  }, [wordData]);
  return [userWord, isLoading];
};
export default useUsersWords;
