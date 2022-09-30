import { useState } from "react";
import usePageOfWords from "../../helpers/hooks/usePageOfWords";
import { dictionary, levels } from "../../config/config";

import { Pagination } from "antd";

import Spinner from "../../components/Basic/Spinner/Spinner";
import Container from "../../components/Basic/Container/Container";
import Menu from "../../components/Custom/Menu/Menu";
import WordCard from "../../components/Custom/WordCard/WordCard";
import WordsList from "../../components/Custom/WordsList/WordsList";

const TextBook = () => {
  const [menuCurrentItem, setMenuCurrentItem] = useState(levels[0]);
  const [group, setGroup] = useState(0);
  const [page, setPage] = useState(1);
  const [currentWordNum, setCurrentWordNum] = useState(0);

  const [pageOfWords =[], isLoading] = usePageOfWords(group, page - 1);

  const menuHandler = (e) => {
    setMenuCurrentItem(e.key);
    setGroup(levels[e.key]);
    setPage(1);
    setCurrentWordNum(0);
  };

  const pagesHandler = (page) => {
    setPage(page);
    setCurrentWordNum(0);
  };

  // console.log(pageOfWords[0]);
  return (
    <>
      {isLoading && <Spinner />}
      <Container>
        <h2 style={{ margin: "2rem" }}>TextBook</h2>
        <Menu onClick={menuHandler} selectedKeys={[menuCurrentItem]}  defaultSelectedKeys={['Easy']}></Menu>
        <div style={{ display: "flex" }}>
          {pageOfWords.length > 0 && [
            <WordsList key={"WordsList"} style={{ flex: 1 }} pageOfWords={pageOfWords} currentWordNum={currentWordNum} setCurrentWordNum={setCurrentWordNum} />,
            <WordCard key={"WordCard"} style={{ flex: 3 }} pageOfWords={pageOfWords} currentWordNum={currentWordNum} setCurrentWordNum={setCurrentWordNum} />,
          ]}
        </div>
        <div style={{ display: "flex", justifyContent: "center", padding: "1.5rem 0.5rem", background: "white" }}>
          <Pagination
            onChange={pagesHandler}
            pageSize={dictionary.PAGE_SIZE}
            showSizeChanger={false}
            current={page}
            total={dictionary.WORDS_IN_CATEGORY}
          />
        </div>
      </Container>
    </>
  );
};
export default TextBook;
