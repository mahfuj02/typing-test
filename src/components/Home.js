import { useState, useRef } from "react";
import classes from "../styles/Home.module.css";
import Word from "./Word";
import Timer from "./Timer";

// MUI
import {
  TextField,
  Input,
  Container,
  Autocomplete,
  Typography,
  Stack,
  CssBaseline,
  Button,
} from "@mui/material";
import { Box } from "@mui/system";

const getCloud = () =>
  `simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries`
    .split(" ")
    .sort(() => (Math.random() > 0.5 ? 1 : -1));

export default function Home() {
  const [userInput, setUserInput] = useState("");
  const [activeWordIndex, setActiveWordIndex] = useState(0);
  const [correctWordArray, setCorrectWordArray] = useState([]);
  const [startCounting, setStartCounting] = useState(false);
  const [resetClock, setResetClock] = useState(false)

  const cloud = useRef(getCloud());

  function processInput(value) {
    if (activeWordIndex === cloud.current.length) {
      return;
    }
    if(resetClock){
      setResetClock(false)
    }
    if (!startCounting) {
      setStartCounting(true);
    }
    if (value.endsWith(" ")) {
      if (activeWordIndex === cloud.current.length - 1) {
        setStartCounting(false);
        setUserInput("Test Completed");
      } else {
        setUserInput("");
      }
      setCorrectWordArray((data) => {
        const word = value.trim();
        const newState = [...data];
        newState[activeWordIndex] = word === cloud.current[activeWordIndex];
        return newState;
      });
      setActiveWordIndex((index) => index + 1);
    } else {
      setUserInput(value);
    }
  }

  function resetTest() {
    setUserInput("");
    setActiveWordIndex(0);
    setCorrectWordArray([]);
    setStartCounting(false);
    setResetClock(true);
    cloud.current = getCloud();
  }
  return (
    <Stack alignItems="center">
      <CssBaseline />
      <Typography
        fontWeight="600"
        variant="h2"
        align="center"
        sx={{ marginBottom: 5, marginTop: 8 }}
      >
        Simple Speed Typing
      </Typography>
      <Timer
        startCounting={startCounting}
        correctWords={correctWordArray.filter(Boolean).length}
        totalWords={correctWordArray.length}
        resetClock={resetClock}
      />
      <Box
        sx={{
          width: "80%",
          border: 1,
          padding: 2,
          marginBottom: 5,
          alignContent: "center",
        }}
      >
        {cloud.current.map((word, index) => {
          return (
            <Word
              text={word}
              active={index === activeWordIndex}
              correct={correctWordArray[index]}
            />
          );
        })}
      </Box>
      <Input
        sx={{ width: "80%" }}
        placeholder="Start Typing"
        value={userInput}
        onChange={(e) => processInput(e.target.value)}
      />
      <div>
        <Button
          sx={{ marginTop: 5 }}
          variant="outlined"
          onClick={(e) => resetTest()}
        >
          RESET
        </Button>
      </div>
    </Stack>
  );
}
