import React from "react";
import styles from "./styles.module.scss";
import space from "./assets/img/space-1200-80.jpg";

const style = {};
style.back = {
  backgroundImage: `url(${space})`,
  width: "10rem",
  height: "10rem",
  backgroundSize: "contain",
};
function App() {
  return (
    <div className={styles.red} style={style.back}>
      App
    </div>
  );
}
export default App;
