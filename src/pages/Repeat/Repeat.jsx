import { useAppState } from "../../state/app-state";
import Container from "../../components/Basic/Container/Container";

const Repeat = () => {
  const [state, dispatch] = useAppState();

  return (
    <Container>
      {/* {state.isAuth && isLoading  && <Spinner/>} */}
      <div style={{ padding: "1rem" }}>
        <h2>Repeat</h2>
        {state.isAuth ? <p>{state.userWords.length}</p> : <p>You have to login</p>}
      </div>
    </Container>
  );
};
export default Repeat;
