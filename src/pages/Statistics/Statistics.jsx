import { useAppState } from "../../state/app-state";
import useFirstWords from "../../helpers/hooks/useFirstWords";


const Statistics = () => {
const [state, dispatch] = useAppState();
  const [firstWords] = useFirstWords();

  return (
    <div>
      <h2>Statistics</h2>
      {state.isAuth ? <p>{firstWords.length > 0 ? firstWords.length : "loading..."}</p> : <p>You have to login</p>}
    </div>
  );
};
export default Statistics;
