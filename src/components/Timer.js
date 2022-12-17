import { useEffect, useState } from "react";
import Result from "./Results";

export default function Timer({ startCounting, correctWords, totalWords }) {
  const [timeElapsed, settimeElapsed] = useState(0);

  useEffect(() => {
    let id;
    if (startCounting) {
      id = setInterval(() => {
        settimeElapsed((oldTime) => oldTime + 1);
      }, 1000);
    }
    else{
      settimeElapsed(0);
    }
    return () => {
      clearInterval(id);
    };
  }, [startCounting]);
  return (
    <>
      <div><b>Time:</b> {timeElapsed} second</div>
      <div>Error: {totalWords - correctWords} </div>
      <Result correctWords={correctWords} minutes={timeElapsed / 60} />
    </>
  );
}
