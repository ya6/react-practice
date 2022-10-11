import { useState, useEffect } from "react";
import FetchService from "../../services/FetchService";
import { useAppState } from "../../state/app-state";

const useUsersWords = (word) => {
  const [userWord, setUserWord] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [state, dispatch] = useAppState();
 const wordData = { difficulty: "easy", currenWord: word, status: 1};
  useEffect(() => {
    let isCurrent = true;
    if ((state.isAuth && word)) {
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
  }, [word]);
  return [userWord, isLoading];
};
export default useUsersWords;
