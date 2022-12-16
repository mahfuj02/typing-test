import { useEffect, useState } from "react";

export default function Timer({startCounting}) {
  const [timeElapsed, settimeElapsed] = useState(0);

  useEffect(() => {
    if (startCounting) {
      setInterval(() => {
        settimeElapsed((oldTime) => oldTime + 1);
      }, 1000);
    }
  }, [startCounting]);
  return <div>Time: {timeElapsed}</div>;
}
