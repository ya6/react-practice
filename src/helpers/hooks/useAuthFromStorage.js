import StorageService from "../../services/StorageService";
import { useEffect } from "react";

import { useAppState} from '../../state/app-state'

const useAuthFromStorage = () => {
    const [state, dispatch] = useAppState();
  useEffect(() => {
    const user = StorageService.loadSavedUser();
    if (user) {
      dispatch({ type: "AUTH_FROM_STORAGE", userData: user });
    }
  }, []);
};

export default useAuthFromStorage;
