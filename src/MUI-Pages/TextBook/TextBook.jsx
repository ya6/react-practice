import { urls, route, levels, title, dictionary, STEP, LIMIT } from "../../config/config";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppState } from "../../state/app-state";
import usePageOfWords from "../../helpers/hooks/usePageOfWords";
import usePlaySound from "../../helpers/hooks/usePlaySound";
import useUserWords from "../../helpers/hooks/useUserWords";


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
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";

const TextBook = () => {
  //lazy
  const getGroup = () => Number(window.localStorage.getItem("group")) || 0;
  const getPage = () => Number(window.localStorage.getItem("page")) + 1 || 1;
  const [{isAuth, userWords}, dispatch] = useAppState();
  
  const [group, setGroup] = useState(getGroup);
  const [currentPageNum, setCurrentPageNum] = useState(getPage);
  const [currentWordNum, setCurrentWordNum] = useState(0);
  const [seeTranslate, setSeeTranslate] = useState(false);
  const [_, isLoading_UserWords] = useUserWords();
 


  const [setSoudUrl] = usePlaySound();

  const [pageOfWords, isLoading] = usePageOfWords(group, currentPageNum - 1);

  const handleChange = (e, value) => {
    setCurrentPageNum(value);
  };
  const navigate = useNavigate();
  const toCheckHandler = () => {
    dispatch({ type: "SET_CURRENT_WORDS_PAGE", pageOfWords: pageOfWords });
    navigate(route.CHECK);
  };
  // console.log('status--->',state.userWords[0].optional.status);
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
            setCurrentPageNum(1);
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
        
        {(!isAuth && isLoading) || (isAuth && isLoading && isLoading_UserWords ) ? (
          <CircularProgress thickness={5} sx={{ position: "fixed", top: "40%", left: "48%", zIndex: 1000 }} />
        ) : (
          <Stack direction={{ xs: "column", md: "row" }} spacing={{ xs: 1, sm: 1, md: 1 }}>
            {/* -----List */}

            <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", background: "transparent" }} flex={1}>
              {pageOfWords.map((word, idx) => {
                let learnedBbackground = "rgb(0, 77, 64)";
                const rez = userWords.find((el) => el.wordId === word.id)
                if (rez) {
                  let opas = 1 - (rez.optional.status * STEP)
                  opas = (opas > LIMIT) ? opas : LIMIT 
                  learnedBbackground=`rgba(0, 77, 64, ${opas})`
                }
              
                if (idx === currentWordNum) {
                  learnedBbackground = "green";
                }

                return (
                  <Button
                    onClick={() => setCurrentWordNum(idx)}
                    variant="contained"
                    style={{
                      flex: 1,
                      background: `${learnedBbackground}`,
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
              <Stack direction={{ md: "row", sm: "column" }} alignItems="center" spacing={1} sx={{ border: "1px solid #ddd", padding: "0.5rem" }}>
                <Box
                  sx={{
                    backgroundImage: `url(${urls.HOST}/${pageOfWords[currentWordNum].image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",

                    height: 170,
                    width: 200,
                  }}
                />
                {/* word block */}
                <Box>
                  {/* data----word----- */}
                  <Box sx={{ mt: "1rem" }}>
                    <Box component="span" style={{ fontSize: "2rem", fontWeight: "600" }}>
                      {pageOfWords[currentWordNum].word}
                    </Box>
                    <Box component="span" style={{ fontSize: "1.6rem", fontWeight: "400", color: "#aaa", margin: "0 0.5rem" }}>
                      {pageOfWords[currentWordNum].transcription}
                    </Box>
                    {/* LoadingSound */}

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
                  <Box>
                    <Box
                      component="span"
                      style={{ fontSize: "1.0rem", lineHeight: "150%" }}
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

                    {/* <LoadingFab  setSoudUrl={setSoudUrl}  soundUrl =  {`${urls.HOST}/${pageOfWords[currentWordNum].audioMeaning}`} isloadingSound ={isloadingSound} /> */}
                  </Box>
                  {/* data-extMeaning-translate */}
                  <Box
                    style={{ fontSize: "1.0rem", color: `${seeTranslate ? "#aaa" : "transparent"}` }}
                    dangerouslySetInnerHTML={{ __html: pageOfWords[currentWordNum].textMeaningTranslate }}
                  />
                  {/* data-textExample */}
                  <Box>
                    <Box
                      component="span"
                      style={{ fontSize: "1.0rem", lineHeight: "150%" }}
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
              <Box style={{ width: "100%", display: "flex", justifyContent: "space-between", marginTop: "0.5rem" }}>
                <Box>
                  <Button
                    spacing={1}
                    variant="outlined"
                    color="gray"
                    onClick={() => {
                      setSeeTranslate(!seeTranslate);
                    }}
                  >
                    Translate
                  </Button>
                  <Button
                    sx={{ margin: "0.3rem 0.3rem 0.3rem 0" }}
                    variant="outlined"
                    color="gray"
                    endIcon={<ArrowCircleRightOutlinedIcon />}
                    onClick={() => setCurrentWordNum((currentWordNum + 1) % dictionary.PAGE_SIZE)}
                  >
                    Next Word
                  </Button>
                </Box>

                <div>
                  {/* <SaveWordModal word = {pageOfWords[currentWordNum]} title={title.PUT_TO_LERN}>
              <WordForm />
            </SaveWordModal> */}
                  <Button type="primary" onClick={toCheckHandler}>
                    {title.TO_CHECK}
                  </Button>
                </div>
              </Box>
            </Box>
          </Stack>
        )}

        <Stack sx={{ border: "1px solid tranparent" }} direction="row" justifyContent="center" alignItems="center" padding={2}>
          <Pagination
            count={30}
            variant="outlined"
            shape="rounded"
            page={currentPageNum}
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
