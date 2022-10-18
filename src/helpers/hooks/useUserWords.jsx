import { useState, useEffect } from "react";
import { serverAnsw } from "../../config/config";
import FetchService from "../../services/FetchService";
import { useAppState } from "../../state/app-state";
import StorageService from "../../services/StorageService";

const useUserWords = () => {
  //Lazy
  const [state, dispatch] = useAppState();
  const setLoading = () => (state.isAuth ? true : false);

  const [userWords, setUserWords] = useState([]);
  const [isLoading, setIsLoading] = useState(setLoading());

  useEffect(() => {
    let isCurrent = true;
    if (state.isAuth) {
      FetchService.loadUserWords(state.userData).then((data) => {
        setIsLoading(false);
        if (data === serverAnsw.UNAUTHORIZED) {
          dispatch({ type: "LOGOUT" });
          StorageService.clearUser();
        }
        if (isCurrent && data !== serverAnsw.UNAUTHORIZED) {
          setUserWords(data);
          dispatch({ type: "LOAD_USER_WORDS", userWords: data });
        }
      });
    }
    return () => {
      //  setIsLoading(true);
      isCurrent = false;
    };
  }, [state.isAuth, state.userWordsTotal]);
  return [userWords, isLoading];
};
export default useUserWords;
