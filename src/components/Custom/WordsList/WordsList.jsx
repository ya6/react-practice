import { useAppState } from "../../../state/app-state";
import { Button } from "antd";

const WordsList = ({ pageOfWords, currentWordNum, setCurrentWord }) => {
  const [state, dispatch] = useAppState();

  const background = "#aaa";

  return (
    <div style={{ flex: 1, background: "white", border: "1px solid #eee" }}>
      <div
        style={{
          padding: "1.8rem 1.2rem",
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "space-between",
          alignContent: "center",
          alignItems: "center",
          gap: "0rem",
        }}
      >
        {pageOfWords.map((word, idx) => {
          let background = "#aaa";
          if (state.userWords.find((el) => el.wordId === word.id)) {
            background = "#96989A";
          }
          if (idx === currentWordNum) {
            background = "#ccc";
          }

          return (
            <Button
              onClick={() => setCurrentWord(idx)}
              size="large"
              type="primary"
              block
              htmlType="button"
              key={idx}
              style={{ border: "none", borderRadius: 0, textAlign: "center", maxWidth: "25%", background: background }}
            >
              {word.word}
            </Button>
          );
        })}
      </div>
    </div>
  );
};
export default WordsList;
