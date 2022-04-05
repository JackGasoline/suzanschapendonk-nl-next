import Head from 'next/head'
import Image from 'next/image'
import axios from 'axios'
import {decode} from 'html-entities'
import styles from '@/styles/Home.module.scss'

import HomeAnimation from '@/components/HomeAnimation/HomeAnimation'

const fetchData = async () => await axios.get('https://api.suzanschapendonk.nl/wp-json/wp/v2/posts?categories=17')
  .then(res => ({
    error: false,
    pageData: res.data,
  }))
  .catch(() => ({
      error: true,
      pageData: null,
    }),
  );

const Home = props => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{props.pageData && props.pageData[0] ? decode(props.pageData[0].title.rendered) : 'Studio Suzan Schapendonk'}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeAnimation />
    </div>
  )
}

export const getServerSideProps = async () => {
  const data = await fetchData();

  return {
    props: data,
  };
}

 export default Home;