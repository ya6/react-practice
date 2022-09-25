import { useState, useEffect } from "react";
import usePageOfWords from "../../helpers/hooks/usePageOfWords";
import { dictionary, levels, urls } from "../../config/config";

import usePlaySound from "../../helpers/hooks/usePlaySound";

import { Menu, Pagination, Button, Spin, Space, Avatar } from "antd";
import { CheckCircleTwoTone, SoundOutlined } from "@ant-design/icons";

const Dictionary = () => {
  const [menuCurrentItem, setMenuCurrentItem] = useState(levels[0]);
  const [group, setGroup] = useState(0);
  const [page, setPage] = useState(1);
  const [currentWord, setCurrentWord] = useState(0);
  const [seeTranslate, setSeeTranslate] = useState(false);

  const [setSoudUrl] = usePlaySound();
  const [pageOfWords, isLoading] = usePageOfWords(group, page - 1);

  const playSound = (url) => {
    setSoudUrl(url);
  };
  const menuItems = Object.keys(levels).map((level, idx) => ({
    key: level,
    group: idx,
    icon: <CheckCircleTwoTone />,
    label: level,
  }));

  const menuHandler = (e) => {
    setMenuCurrentItem(e.key);
    setGroup(levels[e.key]);
    setPage(1);
    setCurrentWord(0);
  };

  const pagesHandler = (page) => {
    setPage(page);
    setCurrentWord(0);
  };

  const wordsHandler = (word) => {
    setCurrentWord(word);
  };

  useEffect(() => {
    setSeeTranslate(false);
  }, [currentWord, page, group]);

  console.log(pageOfWords[0]);
  return (
    <>
      {isLoading && <Spin style={{ position: "fixed", top: "40%", left: "65%", zIndex: 1000 }} size="large" />}
      <div>
        <h2>Dictionary</h2>
        <Menu mode="horizontal" onClick={menuHandler} selectedKeys={[menuCurrentItem]} items={menuItems}></Menu>
        <div style={{ display: "flex" }}>
          <div data------sider style={{ width: "25vw" }}>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {pageOfWords.map((word, idx) => (
                <Button onClick={() => wordsHandler(idx)} type="primary" htmlType="button" key={idx} style={{ width: "25%", margin: "0rem" }}>
                  {word.word}
                </Button>
              ))}
            </div>
            <div style={{ width: "100%", padding: "0.5rem 1.5rem 0.5rem 0.0rem" }} align="center">
              <Pagination onChange={pagesHandler} pageSize={dictionary.PAGE_SIZE} simple current={page} total={dictionary.WORDS_IN_CATEGORY} />
            </div>
          </div>
          {pageOfWords.length > 0 && (
            <div
              data-----content
              style={{ width: "75vw", background: "gray", display: "flex", justifyContent: "center", alignItems: "center", padding: "1rem" }}
            >
              <div
                data-------card
                style={{ width: "80%", height: "40vh", display: "flex", gap: "2rem", background: "white", padding: "1rem", position: "relative" }}
              >
                <Avatar shape="square" size={200} src={`${urls.HOST}/${pageOfWords[currentWord].image}`} />
                <div>
                  <div data-----descriptionstyle={{ position: "relative" }}>
                    <span style={{ fontSize: "2rem", fontWeight: "600", marginRight: "1rem" }}>{pageOfWords[currentWord].word}</span>
                    <span style={{ fontSize: "1.6rem", fontWeight: "400", color: "#aaa" }}>{pageOfWords[currentWord].transcription}</span>

                    <Button
                      onClick={() => {
                        playSound(`${urls.HOST}/${pageOfWords[currentWord].audio}`);
                      }}
                      type="primary"
                      shape="circle"
                      icon={<SoundOutlined />}
                      style={{ marginLeft: "0.5rem", background: "#aaa", border: "none" }}
                    />

                    <div style={{ fontSize: "1.0rem", fontWeight: "400", color: `${seeTranslate ? "#aaa" : "transparent"}` }}>
                      {pageOfWords[currentWord].wordTranslate}
                    </div>
                    <span
                      style={{ fontSize: "1.0rem", fontWeight: "400", color: "", display: "inline" }}
                      dangerouslySetInnerHTML={{ __html: pageOfWords[currentWord].textMeaning }}
                    />
                    <Button
                      onClick={() => {
                        playSound(`${urls.HOST}/${pageOfWords[currentWord].audioMeaning}`);
                      }}
                      type="primary"
                      shape="circle"
                      icon={<SoundOutlined />}
                      style={{ marginLeft: "0.5rem", background: "#aaa", border: "none" }}
                    />
                    <div
                      style={{ fontSize: "0.9rem", fontWeight: "400", color: `${seeTranslate ? "#aaa" : "transparent"}` }}
                      dangerouslySetInnerHTML={{ __html: pageOfWords[currentWord].textMeaningTranslate }}
                    />
                    <span
                      style={{ fontSize: "1.0rem", fontWeight: "400", color: "" }}
                      dangerouslySetInnerHTML={{ __html: pageOfWords[currentWord].textExample }}
                    />
                    <Button
                      onClick={() => {
                        playSound(`${urls.HOST}/${pageOfWords[currentWord].audioExample}`);
                      }}
                      type="primary"
                      shape="circle"
                      icon={<SoundOutlined />}
                      style={{ marginLeft: "0.5rem", background: "#aaa", border: "none" }}
                    />

                    <div
                      style={{ fontSize: "0.9rem", fontWeight: "400", color: `${seeTranslate ? "#aaa" : "transparent"}` }}
                      dangerouslySetInnerHTML={{ __html: pageOfWords[currentWord].textExampleTranslate }}
                    />
                  </div>
                  <div style={{ position: "absolute", bottom: "2%", right: "1%" }}>
                    <Button
                      onClick={() => {
                        setSeeTranslate(!seeTranslate);
                      }}
                    >
                      Translate
                    </Button>
                    <Button onClick={() => setCurrentWord((currentWord + 1) % dictionary.PAGE_SIZE)}> Next</Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default Dictionary;
