import { useState } from "react";
import usePageOfWords from "../../helpers/hooks/usePageOfWords";
import { levels } from "../../config/config";
import DataContect from "../../helpers/DataContect";

import { Menu } from "antd";
import { PlayCircleOutlined } from "@ant-design/icons";

const Dictionary = () => {
  const [menuCurrentItem, setMenuCurrentItem] = useState(levels[0]);
  const [group, setGroup] = useState(0);
  const [page, setPage] = useState(0);

  const [pageOfWords] = usePageOfWords(group, page);

  console.log("-->", pageOfWords);

  const menuItems = Object.keys(levels).map((level, idx) => ({
    key: level,
    group: idx,
    icon: <PlayCircleOutlined />,
    label: level,
  }));

  const onClick = (e) => {
    // console.log(levels[e.key]);
    setMenuCurrentItem(e.key);
    setGroup(levels[e.key]);
  };

  return (
    <div>
      <h2>Dictionary</h2>
      <Menu mode="horizontal" onClick={onClick} selectedKeys={[menuCurrentItem]} items={menuItems}></Menu>
      <div style={{ display: "flex" }}>
        <div style={{ width: "25vw", background: "#eee" }}>Sider</div>
        <div style={{ width: "75vw", background: "gray" }}>Content</div>
      </div>

      <p>{pageOfWords.length > 0 ? pageOfWords[0].word : "loading..."}</p>
    </div>
  );
};
export default Dictionary;
