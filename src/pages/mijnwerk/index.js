import Image from 'next/image'
import Link from 'next/link'
import { NextSeo } from 'next-seo'
import axios from 'axios'
import {decode} from 'html-entities'
import styles from '@/styles/Mijnwerk.module.scss'

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
  //console.log(props.pageData)
  return (
    <div className={styles.container}>
      <NextSeo title="Mijn Werk" />
      {props.pageData.map((post) => (
        <div key={post.id}>
          <Link href={`/mijnwerk/${post.slug}`} passHref>
           <a className={styles.workLink}>{post.acf['afbeelding_1'].sizes.shop_catalog && <Image src={post.acf['afbeelding_1'].sizes.shop_catalog} alt={post.acf['afbeelding_1'].alt} layout="fill" objectFit="contain" />}
           </a>
           </Link>
        </div>
      ))}

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