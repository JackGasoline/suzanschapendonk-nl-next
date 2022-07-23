import {loadingState, exitState} from "./defaultStates";

export const Cactus1Animation = {
    loading: loadingState,
    hidden: {
      y: "-70vh",
      rotate: 80,
      x: "5vw",
    },
    visible: {
      y: "0",
      transition: {
        duration: 3.2,
        delay: 0.6,
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