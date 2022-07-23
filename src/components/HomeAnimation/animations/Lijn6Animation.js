import {loadingState, exitState} from "./defaultStates";

export const Lijn6Animation = {
    loading: {
        ...loadingState,
             scale: [1,0,1],
        x: "25vw",   
      },
    hidden: {
        scale: [1,0,1],
        x: "25vw",
    },
    visible: {
      transition: {
        duration: 3500,
        delay: 250,
        type: "tween",
      },
    },
    exit: exitState,
  };