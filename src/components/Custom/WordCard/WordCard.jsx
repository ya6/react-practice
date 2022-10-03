import { useState } from "react";
import { useAppState } from "../../../state/app-state";
import { Button, Avatar, Space } from "antd";
import { SoundOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

import Switch from "../Switch/Switch";
import SaveWordModal from "../SaveWordModal/SaveWordModal";

import usePlaySound from "../../../helpers/hooks/usePlaySound";

import { dictionary, title, urls, route } from "../../../config/config";
import WordForm from "../../Basic/WordForm/WordForm";


const WordCard = ({ pageOfWords, currentWordNum, setCurrentWordNum }) => {
  const [seeTranslate, setSeeTranslate] = useState(false);
  const [setSoudUrl] = usePlaySound();

  const [state, dispatch] = useAppState();

  const navigate = useNavigate()

const toCheckHandler = () => {
  dispatch( {type: "SET_CURRENT_WORDS_PAGE", pageOfWords: pageOfWords })
  navigate(route.CHECK)
}
  return (
    <div style={{ flex: 2, display: "flex", gap: "2rem", background: "white", padding: "1rem" }}>
      <Avatar shape="square" size={200} src={`${urls.HOST}/${pageOfWords[currentWordNum].image}`} />
      <div style={{ flex: 1 }}>
        <div data-----description style={{ width: "100%" }}>
          <div style={{ position: "relative" }}>
            {/* <Switch  checkedChildren="Remembered" unCheckedChildren="Studying" style={{ position: "absolute", top: 0, right: 0 }} /> */}
            <div>
              <span style={{ fontSize: "2rem", fontWeight: "600", marginRight: "1rem" }}>{pageOfWords[currentWordNum].word}</span>
              <span style={{ fontSize: "1.6rem", fontWeight: "400", color: "#aaa" }}>{pageOfWords[currentWordNum].transcription}</span>

              <Button
                onClick={() => {
                  setSoudUrl(`${urls.HOST}/${pageOfWords[currentWordNum].audio}`);
                }}
                type="primary"
                shape="circle"
                icon={<SoundOutlined />}
                style={{ marginLeft: "0.5rem", background: "#aaa", border: "none" }}
              />
            </div>
          </div>

          <div style={{ fontSize: "1.0rem", fontWeight: "400", color: `${seeTranslate ? "#aaa" : "transparent"}` }}>
            {pageOfWords[currentWordNum].wordTranslate}
          </div>
          <span
            style={{ fontSize: "1.0rem", fontWeight: "400", color: "", display: "inline" }}
            dangerouslySetInnerHTML={{ __html: pageOfWords[currentWordNum].textMeaning }}
          />
          <Button
            onClick={() => {
              setSoudUrl(`${urls.HOST}/${pageOfWords[currentWordNum].audioMeaning}`);
            }}
            type="primary"
            shape="circle"
            icon={<SoundOutlined />}
            style={{ marginLeft: "0.5rem", background: "#aaa", border: "none" }}
          />
          <div
            style={{ fontSize: "0.9rem", fontWeight: "400", color: `${seeTranslate ? "#aaa" : "transparent"}` }}
            dangerouslySetInnerHTML={{ __html: pageOfWords[currentWordNum].textMeaningTranslate }}
          />
          <span
            style={{ fontSize: "1.0rem", fontWeight: "400", color: "" }}
            dangerouslySetInnerHTML={{ __html: pageOfWords[currentWordNum].textExample }}
          />
          <Button
            onClick={() => {
              setSoudUrl(`${urls.HOST}/${pageOfWords[currentWordNum].audioExample}`);
            }}
            type="primary"
            shape="circle"
            icon={<SoundOutlined />}
            style={{ marginLeft: "0.5rem", background: "#aaa", border: "none" }}
          />

          <div
            style={{ fontSize: "0.9rem", fontWeight: "400", color: `${seeTranslate ? "#aaa" : "transparent"}` }}
            dangerouslySetInnerHTML={{ __html: pageOfWords[currentWordNum].textExampleTranslate }}
          />
        </div>
        <div style={{ width: "100%", display: "flex", justifyContent: "space-between",  }} align="left">
          <div >
            <Button
              onClick={() => {
                setSeeTranslate(!seeTranslate);
              }}
            >
              Translate
            </Button>
            <Button onClick={() => setCurrentWordNum((currentWordNum + 1) % dictionary.PAGE_SIZE)}>Next Word</Button>
          </div>

          <div>
            <Space >

            <SaveWordModal word = {pageOfWords[currentWordNum]} title={title.PUT_TO_LERN}>
              <WordForm />
            </SaveWordModal>
            <Button type="primary" onClick={toCheckHandler}> {title.TO_CHECK}</Button>
            </Space>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WordCard;
