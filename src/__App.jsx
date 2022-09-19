import React, { useEffect, useState } from "react";
// import styles from "./styles.module.scss";
import space from "./assets/img/space-1200-80.jpg";
import Loader from "./services/Loader";

const style = {};
style.back = {
  backgroundImage: `url(${space})`,
  width: "10rem",
  height: "10rem",
  backgroundSize: "contain",
};
function App() {
//   const [auth, setAuth] = useState(null);
//   const [authAttempt, setAuthAttempt] = useState(false);
  const [firstWords, setfirstWords] = useState([]);
  useEffect(() => {
    Loader.loadFirstWords(setfirstWords);
  }, []);

  // if (!authAttempt) {
  //   return <p>Authenticating...</p>;
  // }

  // return <div>{auth ? <loggedin auth={auth} /> : <loggeduot />}</div>;
  return (
    <div>
      <h3>App</h3>
      <p>{firstWords?.length}</p>
    </div>
  );
}
export default App;
