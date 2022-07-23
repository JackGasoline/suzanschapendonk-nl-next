import React, { useEffect, useState } from "react";
import Image from "next/image";
import TypeIt from "typeit-react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./HomeAnimation.module.scss";

import {
  cactus_1,
  cactus_2,
  cactus_3,
  cupcake,
  eggslut,
  fotolijstje,
  kip,
  koffiepotje,
  lepel,
  lijn_1,
  lijn_2,
  lijn_3,
  lijn_4,
  lijn_5,
  lijn_6,
  lijstje_corona,
  lijstje_zoetzuresaus,
  ovenwant,
  paprikapoeder,
  sambal,
  tabasco,
  wijn_1,
  wijn_2,
  worcestershiresauce,
} from "./assets";

import { TabascoAnimation, WorcestershiresauceAnimation, SambalAnimation, KipAnimation, EggslutAnimation, PaprikapoederAnimation, Wijn1Animation, Wijn2Animation, Lijn1Animation, Lijn2Animation, FotolijstjeAnimation, Lijn3Animation, Lijn4Animation, CupcakeAnimation, Cactus1Animation, Cactus2Animation, Cactus3Animation, KoffiepotjeAnimation, Lijn5Animation, Lijn6Animation, LepelAnimation, OvenwantAnimation, LijstjecoronaAnimation, LijstjezoetzuresausAnimation } from "./animations";

const HomeAnimation = (props) => {
  const [animationStatus, setAnimationStatus] = useState("loading");
  const [imagesLoaded, setImagesLoaded] = useState(0);
  let animationTimer;

  const startTheAnimation = () => {
    setAnimationStatus("visible");
    clearTimeout(animationTimer);
  };

  const handleImageLoad = (el) => {
    setImagesLoaded((prevState) => prevState + 1);
  };

  useEffect(() => {
    if (imagesLoaded > 23) {
      setAnimationStatus("hidden");
      animationTimer = setTimeout(() => {
        startTheAnimation();
      }, 100);
    }
  }, [imagesLoaded]);

  /*useEffect(() => {
        console.log(animationStatus);
      }, [animationStatus])*/

  return (
    <div className={styles.container}>
      <AnimatePresence exitBeforeEnter={false} onExitComplete={() => null}>
        <motion.div
          key="animation-worcestershiresauce"
          className={styles.WorcestershiresauceWrapper}
          variants={WorcestershiresauceAnimation}
          animate={animationStatus}
          whileHover="hover"
          exit="exit"
        >
          <div className={styles.img}>
            <Image
              src={worcestershiresauce}
              alt="Worcestershiresauce"
              layout="fill"
              objectFit="contain"
              sizes="15vw"
              onLoadingComplete={() => handleImageLoad(0)}
            />
          </div>
        </motion.div>
        <motion.div
          key="animation-tabasco"
          className={styles.TabascoWrapper}
          variants={TabascoAnimation}
          animate={animationStatus}
          exit="exit"
        >
          <div className={styles.img}>
            <Image
              src={tabasco}
              alt="Tabasco"
              layout="fill"
              objectFit="contain"
              sizes="15vw"
              onLoadingComplete={() => handleImageLoad(1)}
            />
          </div>
        </motion.div>
        <motion.div
          key="animation-sambal"
          className={styles.SambalWrapper}
          variants={SambalAnimation}
          animate={animationStatus}
          exit="exit"
        >
          <div className={styles.img}>
            <Image
              src={sambal}
              alt="Sambal"
              layout="fill"
              objectFit="contain"
              sizes="15vw"
              onLoadingComplete={() => handleImageLoad(2)}
            />
          </div>
        </motion.div>
        <motion.div
          key="animation-kip"
          className={styles.KipWrapper}
          variants={KipAnimation}
          animate={animationStatus}
          exit="exit"
        >
          <div className={styles.img}>
            <Image
              src={kip}
              alt="Kip"
              layout="fill"
              objectFit="contain"
              sizes="15vw"
              onLoadingComplete={() => handleImageLoad(3)}
            />
          </div>
        </motion.div>
        <motion.div
          key="animation-paprikapoeder"
          className={styles.PaprikapoederWrapper}
          variants={PaprikapoederAnimation}
          animate={animationStatus}
          exit="exit"
        >
          <div className={styles.img}>
            <Image
              src={paprikapoeder}
              alt="Paprikapoeder"
              layout="fill"
              objectFit="contain"
              sizes="15vw"
              onLoadingComplete={() => handleImageLoad(4)}
            />
          </div>
        </motion.div>
        <motion.div
          key="animation-eggslut"
          className={styles.EggslutWrapper}
          variants={EggslutAnimation}
          animate={animationStatus}
          exit="exit"
        >
          <div className={styles.img}>
            <Image
              src={eggslut}
              alt="Eggslut"
              layout="fill"
              objectFit="contain"
              sizes="15vw"
              onLoadingComplete={() => handleImageLoad(5)}
            />
          </div>
        </motion.div>
        <motion.div
          key="animation-wijn1"
          className={styles.Wijn1Wrapper}
          variants={Wijn1Animation}
          animate={animationStatus}
          exit="exit"
        >
          <div className={styles.img}>
            <Image
              src={wijn_1}
              alt="Pinot Madeleine"
              layout="fill"
              objectFit="contain"
              sizes="15vw"
              onLoadingComplete={() => handleImageLoad(6)}
            />
          </div>
        </motion.div>
        <motion.div
          key="animation-wijn2"
          className={styles.Wijn2Wrapper}
          variants={Wijn2Animation}
          animate={animationStatus}
          exit="exit"
        >
          <div className={styles.img}>
            <Image
              src={wijn_2}
              alt="Pinot Madeleine"
              layout="fill"
              objectFit="contain"
              sizes="15vw"
              onLoadingComplete={(el) => handleImageLoad(el)}
            />
          </div>
        </motion.div>
        <motion.div
          key="animation-lijn1"
          className={styles.Lijn1Wrapper}
          variants={Lijn1Animation}
          animate={animationStatus}
          exit="exit"
        >
          <div className={styles.img}>
            <Image
              src={lijn_1}
              alt="Lijn"
              layout="fill"
              objectFit="contain"
              sizes="60vw"
              onLoadingComplete={(el) => handleImageLoad(el)}
            />
          </div>
        </motion.div>
        <motion.div
          key="animation-lijn2"
          className={styles.Lijn2Wrapper}
          variants={Lijn2Animation}
          animate={animationStatus}
          exit="exit"
        >
          <div className={styles.img}>
            <Image
              src={lijn_2}
              alt="Lijn"
              layout="fill"
              objectFit="contain"
              sizes="60vw"
              onLoadingComplete={(el) => handleImageLoad(el)}
            />
          </div>
        </motion.div>
        <motion.div
          key="animation-fotolijstje"
          className={styles.FotolijstjeWrapper}
          variants={FotolijstjeAnimation}
          animate={animationStatus}
          exit="exit"
        >
          <div className={styles.img}>
            <Image
              src={fotolijstje}
              alt="Fotolijstje"
              layout="fill"
              objectFit="contain"
              sizes="15vw"
              onLoadingComplete={(el) => handleImageLoad(el)}
            />
          </div>
        </motion.div>
        <div key="animation-siteheader" className={styles.SiteHeaderWrapper}>
          <h1 className={styles.Siteheader}>
            <TypeIt options={{ cursor: false }}>
              studio suzan schapendonk
            </TypeIt>
          </h1>
        </div>
        <motion.div
          key="animation-lijn3"
          className={styles.Lijn3Wrapper}
          variants={Lijn3Animation}
          animate={animationStatus}
          exit="exit"
        >
          <div className={styles.img}>
            <Image
              src={lijn_3}
              alt="Lijn"
              layout="fill"
              objectFit="contain"
              sizes="60vw"
              onLoadingComplete={(el) => handleImageLoad(el)}
            />
          </div>
        </motion.div>
        <motion.div
          key="animation-lijn4"
          className={styles.Lijn4Wrapper}
          variants={Lijn4Animation}
          animate={animationStatus}
          exit="exit"
        >
          <div className={styles.img}>
            <Image
              src={lijn_4}
              alt="Lijn"
              layout="fill"
              objectFit="contain"
              sizes="60vw"
              onLoadingComplete={(el) => handleImageLoad(el)}
            />
          </div>
        </motion.div>
        <motion.div
          key="animation-cupcake"
          className={styles.CupcakeWrapper}
          variants={CupcakeAnimation}
          animate={animationStatus}
          exit="exit"
        >
          <div className={styles.img}>
            <Image
              src={cupcake}
              alt="Cupcake"
              layout="fill"
              objectFit="contain"
              sizes="15vw"
              onLoadingComplete={(el) => handleImageLoad(el)}
            />
          </div>
        </motion.div>
        <motion.div
          key="animation-cactus1"
          className={styles.Cactus1Wrapper}
          variants={Cactus1Animation}
          animate={animationStatus}
          exit="exit"
        >
          <div className={styles.img}>
            <Image
              src={cactus_1}
              alt="Cactus"
              layout="fill"
              objectFit="contain"
              sizes="15vw"
              onLoadingComplete={(el) => handleImageLoad(el)}
            />
          </div>
        </motion.div>
        <motion.div
          key="animation-cactus2"
          className={styles.Cactus2Wrapper}
          variants={Cactus2Animation}
          animate={animationStatus}
          exit="exit"
        >
          <div className={styles.img}>
            <Image
              src={cactus_2}
              alt="Cactus"
              layout="fill"
              objectFit="contain"
              sizes="15vw"
              onLoadingComplete={(el) => handleImageLoad(el)}
            />
          </div>
        </motion.div>
        <motion.div
          key="animation-cactus3"
          className={styles.Cactus3Wrapper}
          variants={Cactus3Animation}
          animate={animationStatus}
          exit="exit"
        >
          <div className={styles.img}>
            <Image
              src={cactus_3}
              alt="Cactus"
              layout="fill"
              objectFit="contain"
              sizes="15vw"
              onLoadingComplete={(el) => handleImageLoad(el)}
            />
          </div>
        </motion.div>
        <motion.div
          key="animation-koffiepotje"
          className={styles.KoffiepotjeWrapper}
          variants={KoffiepotjeAnimation}
          animate={animationStatus}
          exit="exit"
        >
          <div className={styles.img}>
            <Image
              src={koffiepotje}
              alt="Koffiepotje"
              layout="fill"
              objectFit="contain"
              sizes="15vw"
              onLoadingComplete={(el) => handleImageLoad(el)}
            />
          </div>
        </motion.div>
        <motion.div
          key="animation-lijn5"
          className={styles.Lijn5Wrapper}
          variants={Lijn5Animation}
          animate={animationStatus}
          exit="exit"
        >
          <div className={styles.img}>
            <Image
              src={lijn_5}
              alt="Lijn"
              layout="fill"
              objectFit="contain"
              sizes="60vw"
              onLoadingComplete={(el) => handleImageLoad(el)}
            />
          </div>
        </motion.div>
        <motion.div
          key="animation-lijn6"
          className={styles.Lijn6Wrapper}
          variants={Lijn6Animation}
          animate={animationStatus}
          exit="exit"
        >
          <div className={styles.img}>
            <Image
              src={lijn_6}
              alt="Lijn"
              layout="fill"
              objectFit="contain"
              sizes="60vw"
              onLoadingComplete={(el) => handleImageLoad(el)}
            />
          </div>
        </motion.div>
        <motion.div
          key="animation-lepel"
          className={styles.LepelWrapper}
          variants={LepelAnimation}
          animate={animationStatus}
          exit="exit"
        >
          <div className={styles.img}>
            <Image
              src={lepel}
              alt="Lepel"
              layout="fill"
              objectFit="contain"
              sizes="15vw"
              onLoadingComplete={(el) => handleImageLoad(el)}
            />
          </div>
        </motion.div>
        <motion.div
          key="animation-ovenwant"
          className={styles.OvenwantWrapper}
          variants={OvenwantAnimation}
          animate={animationStatus}
          exit="exit"
        >
          <div className={styles.img}>
            <Image
              src={ovenwant}
              alt="Ovenwant"
              layout="fill"
              objectFit="contain"
              sizes="15vw"
              onLoadingComplete={(el) => handleImageLoad(el)}
            />
          </div>
        </motion.div>
        <motion.div
          key="animation-lijstjecorona"
          className={styles.LijstjecoronaWrapper}
          variants={LijstjecoronaAnimation}
          animate={animationStatus}
          exit="exit"
        >
          <div className={styles.img}>
            <Image
              src={lijstje_corona}
              alt="Corona"
              layout="fill"
              objectFit="contain"
              sizes="15vw"
              onLoadingComplete={(el) => handleImageLoad(el)}
            />
          </div>
        </motion.div>
        <motion.div
          key="animation-lijstjezoetzuresaus"
          className={styles.LijstjezoetzuresausWrapper}
          variants={LijstjezoetzuresausAnimation}
          animate={animationStatus}
          exit="exit"
        >
          <div className={styles.img}>
            <Image
              src={lijstje_zoetzuresaus}
              alt="Zoetzure saus"
              layout="fill"
              objectFit="contain"
              sizes="15vw"
              onLoadingComplete={(el) => handleImageLoad(el)}
            />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default HomeAnimation;
