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

import { TabascoAnimation, WorcestershiresauceAnimation } from "./animations";

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
        <div key="animation-sambal" className={styles.SambalWrapper}>
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
        </div>
        <div key="animation-kip" className={styles.KipWrapper}>
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
        </div>
        <div
          key="animation-paprikapoeder"
          className={styles.PaprikapoederWrapper}
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
        </div>
        <div key="animation-eggslut" className={styles.EggslutWrapper}>
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
        </div>
        <div key="animation-wijn1" className={styles.Wijn1Wrapper}>
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
        </div>
        <div key="animation-wijn2" className={styles.Wijn2Wrapper}>
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
        </div>
        <div key="animation-lijn1" className={styles.Lijn1Wrapper}>
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
        </div>
        <div key="animation-lijn2" className={styles.Lijn2Wrapper}>
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
        </div>
        <div key="animation-fotolijstje" className={styles.FotolijstjeWrapper}>
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
        </div>
        <div key="animation-siteheader" className={styles.SiteHeaderWrapper}>
          <h1 className={styles.Siteheader}>
            <TypeIt options={{ cursor: false }}>
              studio suzan schapendonk
            </TypeIt>
          </h1>
        </div>
        <div key="animation-lijn3" className={styles.Lijn3Wrapper}>
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
        </div>
        <div key="animation-lijn4" className={styles.Lijn4Wrapper}>
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
        </div>
        <div key="animation-cupcake" className={styles.CupcakeWrapper}>
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
        </div>
        <div key="animation-cactus1" className={styles.Cactus1Wrapper}>
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
        </div>
        <div key="animation-cactus2" className={styles.Cactus2Wrapper}>
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
        </div>
        <div key="animation-cactus3" className={styles.Cactus3Wrapper}>
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
        </div>
        <div key="animation-koffiepotje" className={styles.KoffiepotjeWrapper}>
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
        </div>
        <div key="animation-lijn5" className={styles.Lijn5Wrapper}>
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
        </div>
        <div key="animation-lijn6" className={styles.Lijn6Wrapper}>
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
        </div>
        <div key="animation-lepel" className={styles.LepelWrapper}>
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
        </div>
        <div key="animation-ovenwant" className={styles.OvenwantWrapper}>
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
        </div>
        <div
          key="animation-lijstjecorona"
          className={styles.LijstjecoronaWrapper}
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
        </div>
        <div
          key="animation-lijstjezoetzuresaus"
          className={styles.LijstjezoetzuresausWrapper}
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
        </div>
      </AnimatePresence>
    </div>
  );
};

export default HomeAnimation;
