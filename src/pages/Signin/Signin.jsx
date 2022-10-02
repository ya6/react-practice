import SigninTabs from "../../components/Custom/SigninTabs/SigninTabs";
import Login from "../../components/Custom/Login/Login";
import Register from "../../components/Custom/Register/Register";
import { useState, useMemo } from "react";
import TabsContext from "../../helpers/TabsContect";
import { route } from "../../config/config";
const Signin = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const redirectIfLogin = route.TEXTBOOK
  const context = useMemo(
    () => ({
      activeIndex,
      setActiveIndex,
      redirectIfLogin
    }),
    [activeIndex]
  );
  return (
    <TabsContext.Provider value={context}>
      <SigninTabs>
        <Login title="Login" />
        <Register  title = "Registr"/>
      </SigninTabs>
    </TabsContext.Provider>
  );
};

export default Signin;
