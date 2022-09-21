import { useState, useEffect } from "react";
import FetchService from "../../services/FetchService";

const useLoginUser = (credentials) => {
  const [serverAnswer, setServerAnswer] = useState(null);
  useEffect(() => {
    if (credentials) {
      FetchService.loginUser(credentials, setServerAnswer);
    }
  }, [credentials]);
  return [serverAnswer, setServerAnswer];
};
export default useLoginUser;
