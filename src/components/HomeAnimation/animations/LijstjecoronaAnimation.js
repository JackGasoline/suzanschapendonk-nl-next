import {loadingState, exitState} from "./defaultStates";

export const LijstjecoronaAnimation = {
    loading: {
        ...loadingState,
          y: "-100vh",
      rotate: 5,    
      },
    hidden: {
      y: "-100vh",
      rotate: 5,
    },
    visible: {
      transition: {
        duration: 5.5,
        delay: 1.2,
        type: "spring",
        damping: 30,
        stiffness: 450,
      },
      rotate: 0,
      y: "0",
    },
    hover: {
        rotate: [1.5, -1.5],
        scale: [1.05, 1, 1.03],
        transition: {
          yoyo: Infinity,
          type: "spring",
          damping: 400,
          stiffness: 400,
        },
    },
    exit: exitState,
  };