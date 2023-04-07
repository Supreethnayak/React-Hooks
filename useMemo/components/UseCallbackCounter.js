import { useState, useMemo } from "react";
// cache a function - useCallback
// cache a result of invoked function - useMemo
// prevents re-render (performance optimization)
// only recompute cached values, when dependencies are changed
// useMemo returns a cached value
// Parameters
// 1. function whose return value needs to be cached
// 2. dependency

// Problem - prevent counterOne from re-render
export default function UseCallbackCounter() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);
  const handleBtnOne = () => {
    setCounterOne(counterOne + 1);
  };
  const handleBtnTwo = () => {
    setCounterTwo(counterTwo + 1);
  };
  const handleOddOrEven = useMemo(() => {
    // problem - multiple lines of code
    let i = 0;
    while (i < 9999) i++;
    return counterOne % 2 === 0;
  }, [counterOne]);
  return (
    <>
      <button onClick={() => handleBtnOne()}>Button 1 -{counterOne}</button>
      {handleOddOrEven ? "Even" : "Odd"}
      <br />
      <button onClick={() => handleBtnTwo()}>Button 2 -{counterTwo}</button>
    </>
  );
}
