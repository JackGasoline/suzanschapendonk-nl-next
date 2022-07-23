import {loadingState, exitState} from "./defaultStates";

export const Lijn1Animation = {
    loading: loadingState,
    hidden: {
        scale: [1,0,1],
        x: "-10vw",
    },
    visible: {
      transition: {
        duration: 2000,
        type: "tween",
      },
    },
    exit: exitState,
  };