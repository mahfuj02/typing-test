import { useEffect, useState } from "react";
import Result from "./Results";

export default function Timer({ startCounting, correctWords }) {
  const [timeElapsed, settimeElapsed] = useState(0);

  useEffect(() => {
    if (startCounting) {
      setInterval(() => {
        settimeElapsed((oldTime) => oldTime + 1);
      }, 1000);
    }
  }, [startCounting]);
  return (
    <>
      <div>Time: {timeElapsed} second</div>
      <Result correctWords = {correctWords} minutes = {timeElapsed/60}  />
    </>
  );
}
