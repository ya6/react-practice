import { useState } from "react";
import usePageOfWords from "../../helpers/hooks/usePageOfWords";
import { dictionary, levels } from "../../config/config";
// import DataContect from "../../helpers/DataContect";

import { Menu, Pagination, Button, Spin } from "antd";
import { PlayCircleOutlined } from "@ant-design/icons";

const Dictionary = () => {
  const [menuCurrentItem, setMenuCurrentItem] = useState(levels[0]);
  const [group, setGroup] = useState(0);
  const [page, setPage] = useState(1);
  const [currentWord, curCentWord] = useState(0);

  const [pageOfWords , isLoading = true] = usePageOfWords(group, page - 1);
  const menuItems = Object.keys(levels).map((level, idx) => ({
    key: level,
    group: idx,
    icon: <PlayCircleOutlined />,
    label: level,
  }));

  const menuHandler = (e) => {
    setMenuCurrentItem(e.key);
    setGroup(levels[e.key]);
    setPage(1);
  };

  const pagesHandler = (page) => {
    setPage(page);

  };

  const wordsHandler = (word) => {
    console.log(word);
  };

  return (<>
      {isLoading && <Spin style={{position: 'fixed', top:'40%', left:'40%'}} size="large" />}
    <div>
      <h2>Dictionary</h2>
      <Menu mode="horizontal" onClick={menuHandler} selectedKeys={[menuCurrentItem]} items={menuItems}></Menu>
      <div style={{ display: "flex" }}>
        <div style={{ width: "25vw" }}>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {pageOfWords.map((word, idx) => (
              <Button onClick={() => wordsHandler(word)} type="primary" htmlType="button" key={idx} style={{ width: "25%", margin: "0rem" }}>
                {word.word}
              </Button>
            ))}
          </div>
          <div style={{ width: "100%", padding: "0.5rem 1.5rem 0.5rem 0.0rem" }} align="center">
            <Pagination onChange={pagesHandler} pageSize={dictionary.PAGE_SIZE} simple current={page} total={dictionary.WORDS_IN_CATEGORY} />
          </div>
        </div>
        <div style={{ width: "75vw", background: "gray" }}>Content</div>
      </div>
    </div>
  </>
  );
};
export default Dictionary;
