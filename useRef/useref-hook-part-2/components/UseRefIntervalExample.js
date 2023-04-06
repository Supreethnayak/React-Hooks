import { useState, useEffect, useRef } from "react";
// problem: cannot access variable created inside of useEffect

// useRef can acccess dom node directly
// And used to store mutable value without any aditional re-renders
export default function UseRefIntervalExample() {
  const [timer, setTimer] = useState(0);
  const myUseRef = useRef(null); // store value of setInterval
  const [startClicked, setStartClicked] = useState(false); // for dependency array in useEffect
  useEffect(() => {
    myUseRef.current = setInterval(() => {
      setTimer((prevVal) => prevVal + 1);
    }, 1000);

    // clean up function - clear when whole component is removed from dom
    return () => clearInterval(myUseRef.current);
  }, [startClicked]);
  return (
    <>
      Timer - {timer}
      <div>
        <button onClick={() => setStartClicked(!startClicked)}>Start</button>
        <button onClick={() => clearInterval(myUseRef.current)}>Stop</button>
      </div>
    </>
  );
}
