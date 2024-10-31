import { useState, useEffect } from "react";

const AdBlockDetector = () => {
  const [isAdBlockEnabled, setIsAdBlockEnabled] = useState(false);

  useEffect(() => {
    const detectAdBlock = async () => {
      try {
        const response = await fetch(
          "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
          {
            method: "HEAD",
            mode: "no-cors",
          }
        );
        setIsAdBlockEnabled(false);
      } catch (err) {
        setIsAdBlockEnabled(true);
      }
    };

    detectAdBlock();
  }, []);

  if (isAdBlockEnabled) {
    return <></>;
  }
};
