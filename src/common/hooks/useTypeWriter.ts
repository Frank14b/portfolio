import { useState, useEffect, useRef, useCallback } from "react";

const useTypeWriter = ({ text, speed }: { text: string; speed: number }) => {
  const [displayedText, setDisplayedText] = useState("");
  const index = useRef(0);
  const finalText = useRef<string>("");
  const initTimeout = useRef<NodeJS.Timeout | number | undefined>(undefined);

  const tick = useCallback(() => {
    finalText.current += text[index.current];
    setDisplayedText(finalText.current);
    index.current++;
    if (index.current === text.length) {
      //
      setTimeout(() => {
        index.current = 0;
        finalText.current = "";
        tick()
      }, 200 * text.length);

      if (initTimeout.current) {
        clearTimeout(initTimeout.current);
      }
      return;
    }
    initTimeout.current = setTimeout(tick, speed);
  }, [text, speed, setDisplayedText]);

  useEffect(() => {
    tick();
  }, [tick]);

  return { displayedText: displayedText + "_" };
};

export default useTypeWriter;
