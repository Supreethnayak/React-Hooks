// acccess dom node directly
// problem: focus login field when the page is loaded

import { useEffect, useRef } from "react";
export default function useRefFocusInputBox() {
  const myUseRef = useRef(null);

  useEffect(() => {
    myUseRef.current.focus();
    console.log("myUseRef", myUseRef.current);
  }, []);

  return (
    <>
      <input ref={myUseRef} type="text" />
    </>
  );
}
