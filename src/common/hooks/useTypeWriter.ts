import { useState, useEffect, useRef, useCallback } from "react";

const useTypeWriter = ({
  allText,
  speed,
  infinite = false,
}: {
  allText: string[];
  speed: number;
  infinite?: boolean;
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const index = useRef(0);
  const finalText = useRef<string>("");
  const initTimeout = useRef<NodeJS.Timeout | number | undefined>(undefined);
  const numberOfText = useRef(allText.length);
  const initTextIndex = useRef(0);

  const tick = useCallback(() => {
    //
    const text = allText[initTextIndex.current];
    //
    finalText.current += text[index.current];
    setDisplayedText(finalText.current);
    index.current++;

    if (index.current === text.length) {
      //

      if (infinite) {
        if (initTextIndex.current == numberOfText.current - 1) {
          initTextIndex.current = 0;
        } else {
          initTextIndex.current += 1;
        }
        //
        setTimeout(async () => {
          for (let i = finalText.current.length; i >= 0; i--) {
            await new Promise((resolve, _) => {
              setTimeout(() => {
                index.current = 0;
                finalText.current = finalText.current.slice(0, -1);
                setDisplayedText(finalText.current);

                resolve(true);
              }, speed);
            });
          }

          tick();
        }, 200 * text.length);
      }

      if (initTimeout.current) {
        clearTimeout(initTimeout.current);
      }
      return;
    }

    initTimeout.current = setTimeout(tick, speed);
  }, [speed, infinite, setDisplayedText]);

  useEffect(() => {
    tick();
  }, [tick]);

  return { displayedText: displayedText + "_" };
};

export default useTypeWriter;
