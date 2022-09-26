import { Menu as MenuAnt } from "antd";
import { CheckCircleTwoTone } from "@ant-design/icons";

import { levels} from "../../../config/config";

const Menu = (props) => {
  const menuItems = Object.keys(levels).map((level, idx) => ({
    key: level,
    group: idx,
    icon: <CheckCircleTwoTone />,
    label: level,
  }));

  return <MenuAnt mode="horizontal" {...props} items={menuItems}></MenuAnt>;
};

export default Menu;
