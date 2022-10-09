import { useState, useEffect } from "react";
import { useAppState } from "../../state/app-state";
import FetchService from "../../services/FetchService";
import StorageService from "../../services/StorageService"

const usePageOftWords = (group = 0, page = 0) => {
  const [onePage, setOnePage] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [state, dispatch] = useAppState()
  useEffect(() => {
    let isCurrent = true;
     FetchService.loadPageOfWords(group, page).then((data) => {
      if (isCurrent) {
        setOnePage(data);
        setIsLoading(false);
        dispatch({type: "WRITE_GROUP_PAGE", group, page})
        StorageService.saveItem("group", group)
        StorageService.saveItem("page", page)

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