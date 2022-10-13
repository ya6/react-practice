import { useState } from "react";

import { useAppState } from "../../state/app-state";
import useSaveUserWord from "../../helpers/hooks/useSaveUserWord";
import useUpdateUserWord from "../../helpers/hooks/useUpdateUserWord";

import { Box, TextField, Typography, Paper, Stack, Button } from "@mui/material";
import useUserWords from "../../helpers/hooks/useUserWords";

const Check = () => {
  const [candidate, setCandidate] = useState("");
  const [rigthWords, setRightWords] = useState([]);
  const [wrongWords, setWrongWords] = useState([]);
  const [learned, setLearned] = useState(0);
  const [word, setWord] = useState(null);

  const [updateWord, setUpdateWord] = useState(null);

  const [{ pageOfWords, group, page, userWords }, dispatch] = useAppState();
  const [serverAnswer, isLoading] = useSaveUserWord(word);
  const [serverAnswer1, isLoading1] = useUpdateUserWord(updateWord);

  useUserWords();

  const changeHandler = (e) => {
    setCandidate(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!candidate) {
      return;
    }
    const idx = pageOfWords.findIndex((el) => el.word === candidate);
    if (idx == -1) {
      setWrongWords([...wrongWords, candidate]);
    } else if (!rigthWords.includes(candidate)) {
      setLearned(learned + 1);
      setRightWords([...rigthWords, candidate]);

      if (userWords.find((el) => el.optional.word.word === candidate)) {
        //  update
        setUpdateWord(userWords.find((el) => el.optional.word.word === candidate));
      } else {
        //  save
        setWord(pageOfWords[idx]);
      }
    }
    setCandidate("");
  };

  return (
    <Box>
      <Typography m={3} variant="h6">
        Check
      </Typography>
      <Paper sx={{ padding: "1rem", minHeight: "65vh" }} elevation={1} square>
        <Stack direction="row" justifyContent="space-between" alignItems="center" color="gray">
          <Typography style={{ color: "gray" }} variant="subtitle2">
            {`Total: ${pageOfWords.length}`}
          </Typography>
          <Stack direction="row">
            <Typography style={{ color: "gray" }} variant="body2">
              {`Group: ${group + 1}`}
            </Typography>
            <Typography style={{ color: "gray" }} variant="body2" ml={1}>
              {`Page: ${page + 1}`}
            </Typography>
          </Stack>
          <Typography style={{ color: "gray" }} variant="subtitle2">
            {`Learned: ${learned}`}
          </Typography>
        </Stack>

        <Stack direction="row" justifyContent="space-between" style={{ minHeight: "57vh", background: "lightgray", padding: "0.5rem" }}>
          <Box flex={2}>
            <Typography style={{}} variant="subtitle2">
              {`Wrong:`}
            </Typography>
            {wrongWords.map((w, idx) => (
              <p key={idx}>{w}</p>
            ))}
          </Box>
          <Box flex={3}>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <TextField
                required
                fullWidth
                id="word"
                label="English Word"
                name="word"
                autoComplete="off"
                value={candidate}
                onChange={changeHandler}
              />
              <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                Check
              </Button>
            </Box>
          </Box>
          <Box flex={2} style={{ paddingLeft: "0.5rem" }}>
            <Typography style={{}} variant="subtitle2">
              {`Right:`}
            </Typography>
            {rigthWords.map((w, idx) => (
              <p key={idx}>{`${idx + 1}. ${w}`}</p>
            ))}
          </Box>
        </Stack>
      </Paper>
    </Box>
  );
};

export default Check;
