import { Menu as MenuAnt } from "antd";
import { CheckCircleTwoTone, CloseSquareOutlined } from "@ant-design/icons";

import { levels} from "../../../config/config";
import "./styles.scss"
const Menu = (props) => {
  const {selectedKeys} = props;
   const menuItems = Object.keys(levels).map((level, idx) => ({
    key: level,
    group: idx,
    icon:  ((selectedKeys[0] === undefined && idx===0)  || selectedKeys[0] === level) ? <CheckCircleTwoTone /> : <CloseSquareOutlined style={{ color: "transparent"}} />,
    label: level,
    style: null
  }));

  return <MenuAnt mode="horizontal" {...props} items={menuItems}></MenuAnt>;
};

export default Menu;
