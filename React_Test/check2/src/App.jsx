import { useRef } from "react";
import { useState } from "react";

const App = () => {
  const [time, setTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);

  const handleStart = () => {
    setTime(Date.now());
    setNow(Date.now());
    intervalRef.current = setInterval(() => {
      setTime(Date.now());
    }, 10);
  };

  let timePassed = ((time - now) / 1000).toFixed(3);
  const handleStop = () => {
    clearInterval(intervalRef.current);
  };

  const handleReset = () => {
    clearInterval(intervalRef.current);
    setTime(null);
    setNow(null);
  };

  return (
    <>
      <div>
        <h1>StopWatch</h1>
        <h2>{timePassed}</h2>
      </div>
      <div>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </>
  );
};

export default App;
