import { Switch as SwitchAnt } from "antd";
import "./style.css";

const Switch = (props) => {
  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };

  console.log("Switch");
  return <SwitchAnt {...props} onChange={onChange} />;
};
export default Switch;
