import { Box, Button } from "@mui/material";
import { useState } from "react";
import Container from "../../components/Basic/Container/Container";

const Repeat = () => {
  const [list, setList] = useState([
    { id: 0, order: 1, content: "card1" },
    { id: 1, order: 2, content: "card2" },
    { id: 2, order: 3, content: "card3" },
    { id: 3, order: 4, content: "card4" },
  ]);
  const [current, setCurrent] = useState(null);

  const dragStartHandler = (e, el) => {
    setCurrent(el);
  };

  const dragLeaveHandler = (e) => {
    e.target.style.background = "green";
  };

  const dragOverHandler = (e) => {
    e.preventDefault();
    e.target.style.background = "darkgray";
  };

  const dragEndHandler = (e) => {};

  const DropHandler = (e, el) => {
    e.preventDefault();
    const _list = list.map((word) => {
      let _word = word;
      if (word.id === el.id) _word = { ...word, order: current.order };
      if (word.id === current.id) _word = { ...word, order: el.order };
      return _word;
    });
    e.target.style.background = "green";
    setList(_list.sort((a, b) => a.order > b.order));
  };

  return (
    <Container>
      {/* {state.isAuth && isLoading  && <Spinner/>} */}
      <div style={{ padding: "1rem" }}>
        <h2>Repeat</h2>
        <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", background: "transparent", border: "1px solid red" }}>
          {list.map((el) => (
            <Box
              draggable={true}
              onDragStart={(e) => dragStartHandler(e, el)}
              onDragLeave={dragLeaveHandler}
              onDragOver={dragOverHandler}
              onDragEnd={dragEndHandler}
              onDrop={(e) => DropHandler(e, el)}
              style={{
                flex: 1,
                background: "green",
                minWidth: "max-content",
                cursor: "grab",
                border: "1px solid gray",
              }}
              key={el.id}
            >
              {el.content}
            </Box>
          ))}
        </Box>
      </div>
    </Container>
  );
};
export default Repeat;
