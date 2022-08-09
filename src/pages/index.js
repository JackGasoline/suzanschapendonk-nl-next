import styles from "@/styles/Home.module.scss"

import Layout from "@/components/Layout/Layout"
import HomeAnimation from "@/components/HomeAnimation/HomeAnimation"

const Home = (props) => {
  return (
    <div className={styles.container}>
      <Layout  title="Studio Suzan Schapendonk"  description="Studio Suzan Schapendonk: illustratie + ontwerp" canonical="https://suzanschapendonk.nl" route={props.route}>
        <HomeAnimation />
      </Layout>
    </div>
  );
};

export default Home;
