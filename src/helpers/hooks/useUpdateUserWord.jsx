import { useState, useEffect } from "react";
import FetchService from "../../services/FetchService";
import { useAppState } from "../../state/app-state";

const useUpdateUserWord = (updWord) => {
  const [userWord, setUserWord] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [state, dispatch] = useAppState();
  let wordData = null;
  if (updWord) {
    wordData = { difficulty: "easy", currenWord: updWord.optional.word, status: updWord.optional.status + 1 };
  }
  useEffect(() => {
    let isCurrent = true;
    if (state.isAuth && wordData) {
      FetchService.updateUserWord(state.userData, updWord.optional.word, wordData).then((data) => {
        if (isCurrent) {
          setUserWord(data);
          setIsLoading(false);
          dispatch({ type: "UPDATE_USER_WORD", message: updWord.optional.word.word });
        }
      });
    }

    return () => {
      setIsLoading(true);
      isCurrent = false;
    };
  }, [updWord]);
  return [userWord, isLoading];
};
export default useUpdateUserWord;
