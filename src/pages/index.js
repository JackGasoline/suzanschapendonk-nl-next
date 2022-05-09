import { NextSeo } from "next-seo";
import styles from "@/styles/Home.module.scss";

import HomeAnimation from "@/components/HomeAnimation/HomeAnimation";

const Home = (props) => {
  return (
    <div className={styles.container}>
      <NextSeo
        title="Studio Suzan Schapendonk"
        description="Studio Suzan Schapendonk: illustratie + ontwerp"
        canonical="https://suzanschapendonk.nl"
      />

      <HomeAnimation />
    </div>
  );
};

export default Home;
