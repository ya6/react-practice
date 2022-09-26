import { Button } from "antd";

const WordsList = ({ pageOfWords, currentWord, setCurrentWord }) => {

    
  return (
    <div style={{flex: 1, background: "white", border: "1px solid #eee" }}>
      <div style={{ padding: "1.8rem 1.2rem", display: "flex", flexWrap: "wrap", flexDirection: "row", justifyContent: "space-between", alignContent: "center", alignItems: 'center', gap: "0rem"}}>
        {pageOfWords.map((word, idx) => (
          <Button onClick={() => setCurrentWord(idx)} size="large" type="primary" block htmlType="button"
           key={idx} style={{ border: "none", borderRadius: 0, textAlign: "center", maxWidth: "25%", background: `${idx===currentWord ? '#ccc': '#aaa'}` }}>
            {word.word}
          </Button>
        ))}
      </div>
    </div>
  );
};
export default WordsList;
