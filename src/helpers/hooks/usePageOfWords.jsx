import { useState, useEffect } from "react";
import FetchService from "../../services/FetchService";

const usePageOftWords = (group = 0, page= 0) => {
  const [onePage, setOnePage] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    FetchService.loadPageOfWords(group, page, setOnePage, setIsLoading );
  }, [group, page]);
  return [onePage, isLoading];
};
export default usePageOftWords;
