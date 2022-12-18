import { Box, Typography } from "@mui/material";

export default function Result({ correctWords, minutes }) {
  return (
    <>
      {/* <div>Correct word: {correctWords}</div> */}

      <Box
        align="center"
        sx={{
          width: 70,
          height: 70,
          color: "white",
          backgroundColor: "primary.dark",
          marginBottom: 4,
          borderRadius:"10%",
          boxShadow:10
        }}
      >
        <Typography variant="h6"> wpm </Typography>
        <Typography variant="h6"> {(correctWords * minutes|| 0).toFixed(1)}</Typography>
      </Box>
    </>
  );
}
