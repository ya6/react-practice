import { useContext } from "react";
import useFirstWords from "../../helpers/hooks/useFirstWords";
import UserContext from "../../helpers/UserContect";

const Statistics = () => {
  const user = useContext(UserContext);
  const [firstWords] = useFirstWords();
  console.log("--Statistics-- user->", user);
  return (
    <div>
      <h2>Statistics</h2>
      {user.name === "guest" && <p>You have to login </p>}
      {user.name !== "guest"
      && <p>{firstWords.length > 0 ? firstWords.length : "loading..."}</p>}
    </div>

  );
};
export default Statistics;
