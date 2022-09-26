import { useState } from "react";

import { Button, Avatar } from "antd";
import { SoundOutlined } from "@ant-design/icons";

import usePlaySound from "../../../helpers/hooks/usePlaySound";

import { dictionary, urls } from "../../../config/config";

const WordCard = ({ pageOfWords, currentWord, setCurrentWord }) => {
  const [seeTranslate, setSeeTranslate] = useState(false);

  const [setSoudUrl] = usePlaySound();

  return (
    <div style={{ flex: 2, display: "flex", gap: "2rem", background: "white", padding: "1rem", position: "relative", border: "1px solid #eee" }}>
      <Avatar shape="square" size={200} src={`${urls.HOST}/${pageOfWords[currentWord].image}`} />
      <div>
        <div data-----description style={{ position: "relative" }}>
          <span style={{ fontSize: "2rem", fontWeight: "600", marginRight: "1rem" }}>{pageOfWords[currentWord].word}</span>
          <span style={{ fontSize: "1.6rem", fontWeight: "400", color: "#aaa" }}>{pageOfWords[currentWord].transcription}</span>

          <Button
            onClick={() => {
              setSoudUrl(`${urls.HOST}/${pageOfWords[currentWord].audio}`);
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
              setSoudUrl(`${urls.HOST}/${pageOfWords[currentWord].audioMeaning}`);
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
              setSoudUrl(`${urls.HOST}/${pageOfWords[currentWord].audioExample}`);
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
          <Button onClick={() => setCurrentWord((currentWord + 1) % dictionary.PAGE_SIZE)}>Next Word</Button>
        </div>
      </div>
    </div>
  );
};
export default WordCard;
