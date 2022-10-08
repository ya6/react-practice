import { urls, levels, title, dictionary } from "../../config/config";
import { useState } from "react";
import usePageOfWords from "../../helpers/hooks/usePageOfWords";
import usePlaySound from "../../helpers/hooks/usePlaySound";

import {
  Box,
  Typography,
  Paper,
  Stack,
  Pagination,
  PaginationItem,
  BottomNavigation,
  BottomNavigationAction,
  Button,
  CircularProgress,
  Fab,
} from "@mui/material";
import DoneOutlineOutlinedIcon from "@mui/icons-material/DoneOutlineOutlined";
import VolumeUpOutlinedIcon from "@mui/icons-material/VolumeUpOutlined";
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';

const TextBook = () => {
  const [group, setGroup] = useState(0);
  const [currentPageNum, setCurrentPageNum] = useState(1);
  const [currentWordNum, setCurrentWordNum] = useState(0);
  const [seeTranslate, setSeeTranslate] = useState(false);

  const [setSoudUrl] = usePlaySound();

  const [pageOfWords, isLoading] = usePageOfWords(group, currentPageNum - 1);

  const handleChange = (e, value) => {
    setCurrentPageNum(value);
  };

  const toCheckHandler = () => {
    dispatch( {type: "SET_CURRENT_WORDS_PAGE", pageOfWords: pageOfWords })
    navigate(route.CHECK)
  }
  return (
    <Box>
      <Typography m={3} variant="h6">
        TextBook
      </Typography>
      <Paper sx={{ padding: "1rem", minHeight: "50vh" }} elevation={1} square>
        <BottomNavigation
          sx={{
            flexWrap: "wrap",
            height: "auto",
            padding: "0.7rem",
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
          <CircularProgress thickness={5} sx={{ position: "fixed", top: "40%", left: "50%", backgroun: "red" }} />
        ) : (
          <Stack direction={{ xs: "column", md: "row" }} spacing={{ xs: 1, sm: 1, md: 1 }}>
            {/* -----List */}

            <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", border: "1px solid #ddd" }} flex={1}>
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
                    style={{
                      flex: 1,
                      background: `${background}`,
                      textTransform: "none",
                      borderRadius: "0",
                      minWidth: "max-content",
                      boxShadow: "none",
                    }}
                    key={idx}
                  >
                    {word.word}
                  </Button>
                );
              })}
            </Box>

            {/* -----CARD */}
            <Box flex={2}>
              <Stack direction="row" spacing={2} sx={{ border: "1px solid #ddd", padding: "0.5rem" }}>
                <Box
                  // component="img"
                  sx={{
                    backgroundImage: `url(${urls.HOST}/${pageOfWords[currentWordNum].image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: 300,
                    width: 350,
                    maxHeight: { xs: 300, md: 215 },
                    maxWidth: { xs: 350, md: 250 },
                    border: "1px solid red",
                  }}
                  // alt="The house from the offer."
                  // src={`${urls.HOST}/${pageOfWords[currentWordNum].image}`}
                />
                {/* word block */}
                <Box sx={{ border: "1px solid red" }}>
                {/* data----word----- */}
                  <Box>
                    <Box component="span" style={{ fontSize: "2rem", fontWeight: "600" }}>
                      {pageOfWords[currentWordNum].word}
                    </Box>
                    <Box component="span" style={{ fontSize: "1.6rem", fontWeight: "400", color: "#aaa", margin: "0 0.5rem" }}>
                      {pageOfWords[currentWordNum].transcription}
                    </Box>
                    <Fab
                      style={{ display: "inline block", marginTop: "-5px", boxShadow: "none", marginLeft: "0.5rem" }}
                      size="small"
                      color="lightgray"
                      aria-label=""
                      onClick={() => {
                        setSoudUrl(`${urls.HOST}/${pageOfWords[currentWordNum].audio}`);
                      }}
                    >
                      <VolumeUpOutlinedIcon />
                    </Fab>
                  </Box>
                  {/* data-translate  */}
                  <Box sx={{ fontSize: "1.3rem", fontFamily: "Roboto", color: `${seeTranslate ? "#aaa" : "transparent"}` }}>
                    {pageOfWords[currentWordNum].wordTranslate}
                  </Box>
                  {/* data-textMeaning */}
                  <Box >
                    <Box
                      component="span"
                      style={{ fontSize: "1.0rem", fontWeight: "400" }}
                      dangerouslySetInnerHTML={{ __html: pageOfWords[currentWordNum].textMeaning }}
                    />
                    <Fab
                      style={{ display: "inline block", marginTop: "-5px", boxShadow: "none", marginLeft: "0.5rem" }}
                      size="small"
                      color="lightgray"
                      aria-label=""
                      onClick={() => {
                        setSoudUrl(`${urls.HOST}/${pageOfWords[currentWordNum].audioMeaning}`);
                      }}
                    >
                      <VolumeUpOutlinedIcon />
                    </Fab>
                  </Box>
                  {/* data-extMeaning-translate */}
                  <Box
                    
                    style={{ fontSize: "1.0rem",  color: `${seeTranslate ? "#aaa" : "transparent"}` }}
                    dangerouslySetInnerHTML={{ __html: pageOfWords[currentWordNum].textMeaningTranslate }}
                  />
                  {/* data-textExample */}
                  <Box >
                    <Box
                      component="span"
                      style={{ fontSize: "1.0rem", fontWeight: "400" }}
                      dangerouslySetInnerHTML={{ __html: pageOfWords[currentWordNum].textExample }}
                    />
                    <Fab
                      style={{ display: "inline block", marginTop: "-5px", boxShadow: "none", marginLeft: "0.5rem" }}
                      size="small"
                      color="lightgray"
                      aria-label=""
                      onClick={() => {
                        setSoudUrl(`${urls.HOST}/${pageOfWords[currentWordNum].audioExample}`);
                      }}
                    >
                      <VolumeUpOutlinedIcon />
                    </Fab>
                  </Box>
                  {/* data-textExample-translate */}
                  <Box
                    
                    style={{ fontSize: "1rem", color: `${seeTranslate ? "#aaa" : "transparent"}` }}
                    dangerouslySetInnerHTML={{ __html: pageOfWords[currentWordNum].textExampleTranslate }}
                  />

                </Box>
              </Stack>
              <div style={{ width: "100%", display: "flex", justifyContent: "space-between",  }} align="left">
          <div >
            <Button variant	= 'outlined'  color="gray"
              onClick={() => {
                setSeeTranslate(!seeTranslate);
              }}
            >
              Translate
            </Button>
            <Button variant	= 'outlined' color="gray"  endIcon={<ArrowCircleRightOutlinedIcon />} 
             onClick={() => setCurrentWordNum((currentWordNum + 1) % dictionary.PAGE_SIZE)}>Next Word</Button>
          </div>

          <div>       
            {/* <SaveWordModal word = {pageOfWords[currentWordNum]} title={title.PUT_TO_LERN}>
              <WordForm />
            </SaveWordModal> */}
            <Button type="primary" onClick={toCheckHandler}> {title.TO_CHECK}</Button>
           
          </div>
        </div>
            </Box>
          </Stack>
        )}

        <Stack sx={{ border: "1px solid tranparent" }} direction="row" justifyContent="center" alignItems="center" padding={2}>
          <Pagination
            count={30}
            variant="outlined"
            shape="rounded"
            value={currentPageNum}
            onChange={handleChange}
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
