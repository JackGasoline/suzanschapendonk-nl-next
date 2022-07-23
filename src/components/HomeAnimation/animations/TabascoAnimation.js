import {loadingState, exitState} from "./defaultStates";

export const TabascoAnimation = {
    loading: loadingState,
    hidden: {
      y: "-100vh",
      rotate: 80,
      x: "5vw",
    },
    visible: {
      y: "0",
      transition: {
        duration: 2.8,
        delay: 0,
        type: "spring",
        damping: 30,
        stiffness: 450,
      },
      rotate: 0,
      x: "0",
    },
    hover: {
        rotate: [1.5, -1.5],
        scale: [1.05, 1, 1.03],
        transition: {
          yoyo: Infinity,
          type: "spring",
          damping: 200,
          stiffness: 800,
        },
    },
    exit: exitState,
  };