import { useEffect, useState } from "react";
const Timer = ({ timeOut, onTimeOut }) => {
  const [remainingTime, setRemainingTime] = useState(timeOut);
  // to prevent thr infinte loop also, to make a rendering in case
  // the probs change
  useEffect(() => {
    // console.log("123");
    const timeout = setTimeout(onTimeOut, timeOut);
    return () => {
      clearTimeout(timeout);
    };
  }, [timeOut, onTimeOut]);

  // still memorize the prev state after using useEffect,
  // withouut it, an infinite loop occuer as the aet interval start from the beginning at
  // each state change
  useEffect(() => {
    // console.log("456");

    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress id="question-time" max={timeOut} value={remainingTime} />;
};
export default Timer;
