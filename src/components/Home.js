import { useState, useRef, useEffect } from "react";
import classes from "../styles/Home.module.css";
import Word from "./Word";
import Timer from "./Timer";
const getCloud = () =>
  `simply dummy text of the printing and typesetting industry. 
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
  , when an unknown printer took a galley of type and scrambled it to make a type 
  specimen book. It has survived not only five centuries,`.split(" ");
// .sort(() => (Math.random() > 0.5 ? 1 : -1));

export default function Home() {
  const [userInput, setUserInput] = useState("");
  const [activeWordIndex, setActiveWordIndex] = useState(0);
  const [correctWordArray, setCorrectWordArray] = useState([]);
  const [startCounting, setStartCounting] = useState(false);

  const cloud = useRef(getCloud());

  function processInput(value) {
    if (!startCounting) {
      setStartCounting(true);
    }
    if (value.endsWith(" ")) {
      setCorrectWordArray((data) => {
        const word = value.trim();
        const newState = [...data];
        newState[activeWordIndex] = word === cloud.current[activeWordIndex];
        return newState;
      });
      setActiveWordIndex((index) => index + 1);
      setUserInput("");
    } else {
      setUserInput(value);
    }
  }
  return (
    <div className={classes.container}>
      <h1>Test Your Typing Skill..!</h1>
      <Timer startCounting={startCounting} />
      <p>
        {cloud.current.map((word, index) => {
          return (
            <Word
              text={word}
              active={index === activeWordIndex}
              correct={correctWordArray[index]}
            />
          );
        })}
      </p>
      <input
        type="text"
        value={userInput}
        onChange={(e) => processInput(e.target.value)}
      />
    </div>
  );
}
