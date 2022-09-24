import SigninTabs from '../../components/Custom/SininTabs/SigninTabs'
import Login from "../../components/Basic/Login/Login";
import Register from "../../components/Basic/Registr/Registr";


const Signin = () => {
  return (
    <SigninTabs>
      <Login />
      <Register />
    </SigninTabs>
  );
};

export default Signin;
