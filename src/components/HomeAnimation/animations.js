  const TabascoAnimation = {
    hidden: {
      y: "-250vh",
    },
    visible: {
      y: "0",
      transition: {
        duration: 0.8,
        delay: 1.5,
        type: "spring",
        damping: 30,
        stiffness: 450,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  };

const WorcestershiresauceAnimation = {
    hidden: {
      y: "-200vh",
    },
    visible: {
      y: "0",
      transition: {
        duration: 0.5,
        delay: 1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  };

  export {
    TabascoAnimation,
    WorcestershiresauceAnimation
  }