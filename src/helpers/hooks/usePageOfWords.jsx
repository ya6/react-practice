import { useState, useEffect } from "react";
import FetchService from "../../services/FetchService";

const usePageOftWords = (group = 0, page= 0) => {
  const [onePage, setOnePage] = useState([]);
  useEffect(() => {
    FetchService.loadPageOfWords(group, page, setOnePage);
  }, [group, page]);
  return [onePage, setOnePage];
};
export default usePageOftWords;
