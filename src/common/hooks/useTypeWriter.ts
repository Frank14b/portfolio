import { useState, useEffect, useRef, useCallback } from "react";

const useTypeWriter = ({ text, speed }: { text: string; speed: number }) => {
  let finalText = "";
  const [displayedText, setDisplayedText] = useState("");
  const index = useRef(0);
  let initTimeout: NodeJS.Timeout | number | undefined;

  const tick = useCallback(() => {
    finalText += text[index.current];
    setDisplayedText(finalText);
    index.current++;
    if (index.current === text.length) {
      //
      setTimeout(() => {
        index.current = 0;
        finalText = "";
        tick();
      }, 200 * text.length);

      if (initTimeout) {
        clearTimeout(initTimeout);
      }
      return;
    }
    initTimeout = setTimeout(tick, speed);
  }, [text, setDisplayedText]);

  useEffect(() => {
    tick();
  }, []);

  return { displayedText: displayedText + "_" };
};

export default useTypeWriter;
