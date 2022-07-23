import {loadingState, exitState} from "./defaultStates";

export const FotolijstjeAnimation = {
    loading: loadingState,
    hidden: {
      x: "-100vw",
      rotate: -55,
    },
    visible: {
      transition: {
        duration: 10.5,
        delay: 0.2,
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