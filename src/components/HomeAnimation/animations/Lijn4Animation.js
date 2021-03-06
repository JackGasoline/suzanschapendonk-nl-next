import {loadingState, exitState} from "./defaultStates";

export const Lijn4Animation = {
    loading: {
        ...loadingState,
            scale: [1,0,1],
        x: "-100vw",    
      },
    hidden: {
        scale: [1,0,1],
        x: "-100vw",
    },
    visible: {
      transition: {
        duration: 1000,
        type: "tween",
      },
    },
    exit: exitState,
  };