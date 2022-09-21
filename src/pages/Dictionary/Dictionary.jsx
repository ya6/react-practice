import { useState, useEffect } from "react";
import FetchService from "../../services/FetchService";

const Dictionary = () => {
  const [firstWords, setfirstWords] = useState([]);
  useEffect(() => {
    FetchService.loadFirstWords(setfirstWords);
  }, []);

  return (
    <div>
      <h2>Dictionary</h2>
      <p>{firstWords.length > 0 ? firstWords.length : "loading..."}</p>
    </div>

  );
};
export default Dictionary;
