import StorageService from "../../services/StorageService";
import { useEffect } from "react";
import FetchService from "../../services/FetchService";
import { useAppState} from '../../state/app-state'
import { serverAnsw } from "../../config/config";

const useAuthFromStorage = () => {
    const [state, dispatch] = useAppState();
  useEffect(() => {
 
    if (StorageService.loadSavedUser()) {
      const user = StorageService.loadSavedUser();
      // console.log("user->", user);
      //if tokens ok
      dispatch({ type: "AUTH_FROM_STORAGE", userData: user });

      //if tokens not ok
    //   FetchService.getUserTokens(user.userId, user.refreshToken).then((data => {console.log('data -->', data); 
    //   StorageService.saveUser({...user, token: data.token, refreshToken: data.refreshToken});    
    //    dispatch({ type: "AUTH_FROM_STORAGE", userData: {...user, token: data.token, refreshToken: data.refreshToken} });
    
    // }))
    //   FetchService.getUserTokens(user.userId, user.refreshToken).then((data => {console.log('data -->', data);
    //   if (data === serverAnsw.TOKEN_NOT_FAUND) {
    //     dispatch({ type: "LOGOUT" });
    //     StorageService.clearUser();
    //   }
    //   // dispatch({ type: "AUTH_FROM_STORAGE", userData: user });
    
    // }))



    }
    
    //Unauthorized
   
    // TODO check for expire
  
    // console.log('useAuthFromStorage -->', user.token,  user.userId, user.refreshToken);
    // if (user.refreshToken) {
    //   dispatch({ type: "AUTH_FROM_STORAGE", userData: user });
    // }
  }, []);
};

export default useAuthFromStorage;
