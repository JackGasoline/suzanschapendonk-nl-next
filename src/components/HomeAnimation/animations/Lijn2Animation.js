import {loadingState, exitState} from "./defaultStates";

export const Lijn2Animation = {
    loading: loadingState,
    hidden: {
        scale: [1,0,1],
        x: "25vw",
    },
    visible: {
      transition: {
        duration: 1500,
        delay: 3,
        type: "tween",
      },
    },
    exit: exitState,
  };