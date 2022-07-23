import {loadingState, exitState} from "./defaultStates";

export const Lijn5Animation = {
    loading: {
        ...loadingState,
         scale: [1,0,1],
        x: "-10vw",       
      },
    hidden: {
        scale: [1,0,1],
        x: "-10vw",
    },
    visible: {
      transition: {
        duration: 3000,
        delay: 200,
        type: "tween",
      },
    },
    exit: exitState,
  };