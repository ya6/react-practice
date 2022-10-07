import { levels } from "../../config/config";
import { useState } from "react";
import usePageOfWords from "../../helpers/hooks/usePageOfWords";

import { Box, Typography, Paper, Stack, Pagination, PaginationItem, BottomNavigation, BottomNavigationAction, Button } from "@mui/material";
import DoneOutlineOutlinedIcon from "@mui/icons-material/DoneOutlineOutlined";

const TextBook = () => {
  const [group, setGroup] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentWordNum, setCurrentWordNum] = useState(0);

  const [pageOfWords, isLoading] = usePageOfWords(group, currentPage - 1);
  const handleChange = (e, value) => {
    // console.log(e, value);
    setCurrentPage(value);
  };
  return (
    <Box>
      <Typography m={3} variant="h6">
        TextBook
      </Typography>
      <Paper sx={{ padding: "1rem" }} elevation={1} square>
        <BottomNavigation
          sx={{
            flexWrap: "wrap",
            height: "auto",
            padding: "0.7rem"
          }}
          showLabels
          value={group}
          onChange={(event, newValue) => {
            setGroup(newValue);
          }}
        >
          {Object.keys(levels).map((level, idx) => {
            return (
              <BottomNavigationAction
                sx={{ width: "120px", height: "40px" }}
                key={idx}
                label={level}
                icon={group === idx ? <DoneOutlineOutlinedIcon /> : null}
              />
            );
          })}
        </BottomNavigation>
        {isLoading ? (
          "loading"
        ) : (
          <Stack direction={{ xs: "column", sm: "row" }} spacing={{ xs: 1, sm: 2, md: 4 }}>
            <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent:"center", border: "1px solid #ddd" }} flex={3}>
              {pageOfWords.map((word, idx) => {
                let background = "#aaa";
                // if (state.userWords.find((el) => el.wordId === word.id)) {
                //   background = "#96989A";
                // }
                if (idx === currentWordNum) {
                  background = "#ccc";
                }

                return (
                  <Button 
                    onClick={() => setCurrentWordNum(idx)}
                    variant="contained"
                    style={{  flex: 1, background: `${background}`, textTransform: "none", borderRadius: "0", minWidth: "max-content", boxShadow: "none"  }}
                    key={idx}
                  >
                    {word.word}
                  </Button>
                );
              })}
              </Box>

            <Box sx={{ display: "flex", border: "1px solid #ddd" }} flex={5}>
              <Box
                component="img"
                sx={{
                  height: 233,
                  width: 350,
                  maxHeight: { xs: 233, md: 167 },
                  maxWidth: { xs: 350, md: 250 },
                }}
                alt="The house from the offer."
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
              />
            </Box>
          </Stack>
        )}

        <Stack sx={{ border: "1px solid tranparent" }} direction="row" justifyContent="center" alignItems="center" padding={2}>
          <Pagination
            count={30}
            variant="outlined"
            shape="rounded"
            value={currentPage}
            onChange={(handleChange)}
            renderItem={(item, idx) => (
              <PaginationItem {...item} sx={{ border: "1px solid #ddd", borderRadius: "2px", fontWeigth: 300, color: "gray" }} />
            )}
          />
        </Stack>
      </Paper>
    </Box>
  );
};

export default TextBook;
