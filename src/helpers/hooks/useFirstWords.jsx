import { useState, useEffect } from "react";
import FetchService from "../../services/FetchService";

const useFirstWords = () => {
  const [firstWords, setfirstWords] = useState([]);
  useEffect(() => {
    FetchService.loadFirstWords(setfirstWords);
  }, []);
  return [firstWords, setfirstWords];
};
export default useFirstWords;
