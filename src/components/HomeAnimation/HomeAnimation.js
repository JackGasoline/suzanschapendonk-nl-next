import Image from 'next/image'
import TypeIt from 'typeit-react'
import styles from './HomeAnimation.module.scss'

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
    worcestershiresauce
} from './assets'

const WorkImage = props => {
    return (
        <div className={styles.container}>
            <div className={styles.WorcestershiresauceWrapper}>
                <div className={styles.img}><Image src={worcestershiresauce} alt="Worcestershiresauce" layout="fill" objectFit="contain" sizes="15vw" /></div>
            </div>
            <div className={styles.TabascoWrapper}>
                <div className={styles.img}><Image src={tabasco} alt="Tabasco" layout="fill" objectFit="contain" sizes="15vw" /></div>
            </div>
            <div className={styles.SambalWrapper}>
                <div className={styles.img}><Image src={sambal} alt="Sambal" layout="fill" objectFit="contain" sizes="15vw" /></div>
            </div>
            <div className={styles.KipWrapper}>
                <div className={styles.img}><Image src={kip} alt="Kip" layout="fill" objectFit="contain" sizes="15vw" /></div>
            </div>
            <div className={styles.PaprikapoederWrapper}>
                <div className={styles.img}><Image src={paprikapoeder} alt="Paprikapoeder" layout="fill" objectFit="contain" sizes="15vw" /></div>
            </div>
            <div className={styles.EggslutWrapper}>
                <div className={styles.img}><Image src={eggslut} alt="Eggslut" layout="fill" objectFit="contain" sizes="15vw" /></div>
            </div>
            <div className={styles.Wijn1Wrapper}>
                <div className={styles.img}><Image src={wijn_1} alt="Pinot Madeleine" layout="fill" objectFit="contain" sizes="15vw" /></div>
            </div>
            <div className={styles.Wijn2Wrapper}>
                <div className={styles.img}><Image src={wijn_2} alt="Pinot Madeleine" layout="fill" objectFit="contain" sizes="15vw" /></div>
            </div>
            <div className={styles.Lijn1Wrapper}>
                <div className={styles.img}><Image src={lijn_1} alt="Lijn" layout="fill" objectFit="contain" sizes="90vw" /></div>
            </div>
            <div className={styles.Lijn2Wrapper}>
                <div className={styles.img}><Image src={lijn_2} alt="Lijn" layout="fill" objectFit="contain" sizes="90vw" /></div>
            </div>
            <div className={styles.FotolijstjeWrapper}>
                <div className={styles.img}><Image src={fotolijstje} alt="Fotolijstje" layout="fill" objectFit="contain" sizes="15vw" /></div>
            </div>
            <div className={styles.SiteHeaderWrapper}>
                <h1 className={styles.Siteheader}>
                <TypeIt options={{cursor: false}}>studio suzan schapendonk</TypeIt>
            </h1>
            </div>
            <div className={styles.Lijn3Wrapper}>
                <div className={styles.img}><Image src={lijn_3} alt="Lijn" layout="fill" objectFit="contain" sizes="90vw" /></div>
            </div>
            <div className={styles.Lijn4Wrapper}>
                <div className={styles.img}><Image src={lijn_4} alt="Lijn" layout="fill" objectFit="contain" sizes="90vw" /></div>
            </div>
            <div className={styles.CupcakeWrapper}>
                <div className={styles.img}><Image src={cupcake} alt="Cupcake" layout="fill" objectFit="contain" sizes="15vw" /></div>
            </div>
            <div className={styles.Cactus1Wrapper}>
                <div className={styles.img}><Image src={cactus_1} alt="Cactus" layout="fill" objectFit="contain" sizes="15vw" /></div>
            </div>
            <div className={styles.Cactus2Wrapper}>
                <div className={styles.img}><Image src={cactus_2} alt="Cactus" layout="fill" objectFit="contain" sizes="15vw" /></div>
            </div>
            <div className={styles.Cactus3Wrapper}>
                <div className={styles.img}><Image src={cactus_3} alt="Cactus" layout="fill" objectFit="contain" sizes="15vw" /></div>
            </div>
            <div className={styles.KoffiepotjeWrapper}>
                <div className={styles.img}><Image src={koffiepotje} alt="Koffiepotje" layout="fill" objectFit="contain" sizes="15vw" /></div>
            </div>
            <div className={styles.Lijn5Wrapper}>
                <div className={styles.img}><Image src={lijn_5} alt="Lijn" layout="fill" objectFit="contain" sizes="90vw" /></div>
            </div>
            <div className={styles.Lijn6Wrapper}>
                <div className={styles.img}><Image src={lijn_6} alt="Lijn" layout="fill" objectFit="contain" sizes="90vw" /></div>
            </div>
            <div className={styles.LepelWrapper}>
                <div className={styles.img}><Image src={lepel} alt="Lepel" layout="fill" objectFit="contain" sizes="15vw" /></div>
            </div>
            <div className={styles.OvenwantWrapper}>
                <div className={styles.img}><Image src={ovenwant} alt="Ovenwant" layout="fill" objectFit="contain" sizes="15vw" /></div>
            </div>
            <div className={styles.LijstjecoronaWrapper}>
                <div className={styles.img}><Image src={lijstje_corona} alt="Corona" layout="fill" objectFit="contain" sizes="15vw" /></div>
            </div>
            <div className={styles.LijstjezoetzuresausWrapper}>
                <div className={styles.img}><Image src={lijstje_zoetzuresaus} alt="Zoetzure saus" layout="fill" objectFit="contain" sizes="15vw" /></div>
            </div>
        </div>
    )
};

export default WorkImage