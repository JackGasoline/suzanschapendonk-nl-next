const loadingState = {
  opacity: 0,
  transition: {
    duration: 0,
  },
};

const exitState = {
  y: "100vh",
  opacity: 0,
};

const TabascoAnimation = {
  loading: loadingState,
  hidden: {
    y: "-100vh",
    rotate: 80,
    x: "5vw",
  },
  visible: {
    y: "0",
    transition: {
      duration: 2.8,
      delay: 0,
      type: "spring",
      damping: 30,
      stiffness: 450,
    },
    rotate: 0,
    x: "0",
  },
  exit: exitState,
};

const WorcestershiresauceAnimation = {
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

export { TabascoAnimation, WorcestershiresauceAnimation };
