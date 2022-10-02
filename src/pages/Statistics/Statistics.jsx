import { useAppState } from "../../state/app-state";
import useFirstWords from "../../helpers/hooks/useFirstWords";
import Container from "../../components/Basic/Container/Container";

const Statistics = () => {
  const [state, dispatch] = useAppState();
  const [firstWords] = useFirstWords();

  return (
    <Container>
      <div style={{ padding: "1rem" }}>
        <h2>Statistics</h2>
        {state.isAuth ? <p>{firstWords.length > 0 ? firstWords.length : "loading..."}</p> : <p>You have to login</p>}
      </div>
    </Container>
  );
};
export default Statistics;
