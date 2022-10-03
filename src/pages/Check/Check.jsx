import Container from "../../components/Basic/Container/Container";
import { useAppState } from "../../state/app-state"

const Check = ()=> {
    const [state, dispatch] = useAppState()
console.log(state.pageOfWords);
return (
    <Container>
    <div style={{ padding: "1rem" }}>
      <h2>Check</h2>
      {state.isAuth ? <p>{state.pageOfWords.length > 0 ? state.pageOfWords.length : "loading..."}</p> : <p>You have to login</p>}
    </div>
  </Container>
)
}


export default Check