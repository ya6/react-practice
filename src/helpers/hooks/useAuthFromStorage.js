import StorageService from "../../services/StorageService";
import { useEffect } from "react";
import FetchService from "../../services/FetchService";

import { useAppState} from '../../state/app-state'
import { Logger } from "sass";

const useAuthFromStorage = () => {
    const [state, dispatch] = useAppState();
  useEffect(() => {
    const user = StorageService.loadSavedUser();
console.log(user.userId, user.token);
// FetchService.getUserTokens().then((data=> {console.log(data);}))
    // TODO check for expire
    // getUserTokens

    // if (user) {
    //   dispatch({ type: "AUTH_FROM_STORAGE", userData: user });
    // }
  }, []);
};

export default useAuthFromStorage;
