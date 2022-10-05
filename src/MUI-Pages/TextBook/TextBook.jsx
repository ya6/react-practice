import { Box, Typography, Paper, Stack, Pagination, PaginationItem } from "@mui/material";
import { useState } from "react";

const TextBook = () => {
  const [page, setPage] = useState(1);
  const handleChange = (e, value) => {
    // console.log(e, value);
    setPage(value);
  };
  return (
    <Box>
      <Typography m={3} variant="h6">
        TextBook
      </Typography>
      <Paper sx={{ padding: "1rem" }} elevation={1} square>
        <Box>Menu</Box>
        <Stack  direction={{ xs: "column", sm: "row" }} spacing={{ xs: 1, sm: 2, md: 4 }}>
          <Box sx={{ border: "1px solid #ddd" }} flex={3}>
            Box 1
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
        <Stack sx={{ border: "1px solid tranparent" }} direction="row"
  justifyContent="center"
  alignItems="center" padding={2}>
          <Pagination
            count={30}
            variant="outlined"
            shape="rounded"
            page={page}
            onChange={handleChange}
            renderItem={(item, idx) => <PaginationItem  {...item} sx={{ border: "1px solid #ddd", borderRadius: "2px", fontWeigth: 300, color: "gray" }} />}
          />
        </Stack>
      </Paper>
    </Box>
  );
};

export default TextBook;
