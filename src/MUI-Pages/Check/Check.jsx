import { useState } from "react";

import { useAppState } from "../../state/app-state";

import { Box, TextField, Typography, Paper, Stack, Button } from "@mui/material";

const Check = () => {
  const [candidate, setCandidate] = useState("");
  const [rigthWords, setRightWords] = useState([]);
  const [wrongWords, setWrongWords] = useState([]);
  const [learned, setLearned] = useState(0);
  const [{ pageOfWords, isAuth }, dispatch] = useAppState();

  const changeHandler = (e) => {
    setCandidate(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!candidate) {
      return;
    }
    const idx = pageOfWords.findIndex((el) => el.word.toLowerCase() === candidate.toLowerCase());
    if (idx == -1) {
      setWrongWords([...wrongWords, candidate]);
    } else if (!rigthWords.includes(candidate)) {
      setLearned(learned + 1);
      setRightWords([...rigthWords, candidate]);
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
