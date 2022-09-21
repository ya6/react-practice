import { useState, useEffect } from "react";
import FetchService from "../../services/FetchService";

const useCreateUser = (newUser) => {
  const [serverAnswer, setServerAnswer] = useState(null);
  useEffect(() => {
    if (newUser) {
      FetchService.createUser(newUser, setServerAnswer);
    }
  }, [newUser]);
  return [serverAnswer, setServerAnswer];
};
export default useCreateUser;
