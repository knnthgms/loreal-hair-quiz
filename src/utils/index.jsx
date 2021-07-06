import React from "react";

const UTILS = {
  isMobile: () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  },
  useWindowSize: () => {
    const isSSR = typeof window !== "undefined";
    const [windowSize, setWindowSize] = React.useState({
      width: isSSR ? 1200 : window.innerWidth,
      height: isSSR ? 800 : window.innerHeight,
    });

    const changeWindowSize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    React.useEffect(() => {
      window.addEventListener("resize", changeWindowSize);
      return () => {
        window.removeEventListener("resize", changeWindowSize);
      };
    }, []);

    return windowSize;
  },
};

export default UTILS;
