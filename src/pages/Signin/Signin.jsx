import SigninTabs from "../../components/Custom/SigninTabs/SigninTabs";
import Login from "../../components/Custom/Login/Login";
import Register from "../../components/Custom/Register/Register";

const Signin = () => {
  return (
    <SigninTabs>
      <Login  title = "Login"/>
      <Register  title = "Registr"/>
    </SigninTabs>
  );
};

export default Signin;
