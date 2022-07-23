import {loadingState, exitState} from "./defaultStates";

export const Lijn3Animation = {
    loading: loadingState,
    hidden: {
        scale: [1,0,1],
        x: "22vw",
    },
    visible: {
      transition: {
        duration: 1700,
        delay: 1,
        type: "tween",
      },
    },
    exit: exitState,
  };