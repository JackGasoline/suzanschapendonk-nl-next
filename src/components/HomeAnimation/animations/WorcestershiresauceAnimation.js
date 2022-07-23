import {loadingState, exitState} from "./defaultStates";

export const WorcestershiresauceAnimation = {
    loading: loadingState,
    hidden: {
      y: "-70vh",
      rotate: -90,
      x: "-90vw",
      opacity: 1,
      transition: {
        duration: 0,
      },
    },
    visible: {
      y: "0",
      scale: 1,
      transition: {
        duration: 1.5,
        delay: 1,
        type: "spring",
        damping: 40,
        stiffness: 600,
      },
      rotate: 0,
      X: "0",
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

