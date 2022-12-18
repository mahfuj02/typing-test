import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import { useEffect, useState } from "react";
import Result from "./Results";

export default function Timer({ startCounting, correctWords, totalWords, resetClock }) {
  const [timeElapsed, settimeElapsed] = useState(0);
  useEffect(() => {
    let id;
    if (startCounting) {
      id = setInterval(() => {
        settimeElapsed((oldTime) => oldTime + 1);
      }, 1000);
    }
    if(resetClock){
      settimeElapsed(0); 
    }
    return () => {
      clearInterval(id);
    };
  }, [startCounting, resetClock]);
  return (
    <Stack direction="row" spacing={5}>
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
        <Typography variant="h6"> time </Typography>
        <Typography variant="h6"> {timeElapsed}s </Typography>
      </Box>

      <Box
        align="center"
        sx={{
          width: 70,
          height: 70,
          color: "white",
          backgroundColor: "error.light",
          marginBottom: 4,
          borderRadius:"10%",
          boxShadow:10
        }}
      >
        <Typography variant="h6"> error </Typography>
        <Typography variant="h6"> {totalWords - correctWords} </Typography>
      </Box>
      <Result correctWords={correctWords} minutes={60 / timeElapsed} />
    </Stack>
  );
}
