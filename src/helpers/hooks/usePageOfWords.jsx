import { useState, useEffect } from "react";
import FetchService from "../../services/FetchService";

const usePageOftWords = (group = 0, page = 0) => {
  const [onePage, setOnePage] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    let isCurrent = true;
     FetchService.loadPageOfWords(group, page).then((data) => {
      if (isCurrent) {
        setOnePage(data);
        setIsLoading(false);
      }
    });
    return () => {
      setIsLoading(true);
      isCurrent = false;
    };
  }, [group, page]);
  return [onePage, isLoading];
};
export default usePageOftWords;