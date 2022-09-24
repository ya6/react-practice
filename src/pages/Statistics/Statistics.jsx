import { useContext } from "react";
import useFirstWords from "../../helpers/hooks/useFirstWords";
import DataContext from "../../helpers/DataContect";

const Statistics = () => {
  const dataContext = useContext(DataContext);
  const [firstWords] = useFirstWords();

  return (
    <div>
      <h2>Statistics</h2>
      {dataContext.user === "guest" && <p>You have to login</p>}
      {dataContext.user !== "guest"
      && <p>{firstWords.length > 0 ? firstWords.length : "loading..."}</p>}
    </div>

  );
};
export default Statistics;
