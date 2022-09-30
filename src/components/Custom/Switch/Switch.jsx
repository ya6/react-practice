import { Switch as SwitchAnt } from 'antd';
import './style.css'

const onChange = (checked) => {
  console.log(`switch to ${checked}`);
};

const Switch = (props ) => <SwitchAnt {...props} onChange={onChange} />;

export default Switch;