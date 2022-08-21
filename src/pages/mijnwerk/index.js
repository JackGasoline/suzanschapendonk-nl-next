import Image from 'next/image'
import Link from 'next/link'
import axios from 'axios'
import {decode} from 'html-entities'
import styles from './Mijnwerk.module.scss'
import { motion } from 'framer-motion'
import Layout from '@/components/Layout/Layout'
import TypedHeaderBasic from "@/components/TypedHeader/TypedHeaderBasic";

const getAllData =  async (URLs) => {
  return Promise.all(URLs.map(fetchData));
}

const fetchData = async (url) => 
  await axios.get(url)
    .then(res => ({
      error: false,
      data: res.data,
    }))
    .catch(() => ({
        error: true,
        pageData: null,
      }),
    );

const Home = props => {
  //console.log(props.pageData)
  //console.log(props.pageData);
  return (
    <Layout title="Mijn Werk" route={props.route}>
    <div className={styles.container}>
    {props.pageData && (
        <div>
          <TypedHeaderBasic title={decode(props.pageData.title.rendered)} />
          <div
            dangerouslySetInnerHTML={{
              __html: props.pageData.content.rendered,
            }}
          ></div>
        </div>
      )}


    <div className={styles.imageContainer}>
      <div>
      {props.pageItems.map((post) => (
          <div key={post.id}>
            <Link href={`/mijnwerk/${post.slug}`} passHref>
            <a className={styles.workimage}>{post.acf['afbeelding_1'].sizes.woocommerce_single && <Image src={post.acf['afbeelding_1'].sizes.woocommerce_single} alt={post.acf['afbeelding_1'].alt}                       layout="fill"
                      objectFit="contain"
                      sizes="12.8vw" />}
            </a>
            </Link>
          </div>
        ))}
        </div>
        </div>
    </div>
    </Layout>
  )
}

export const getServerSideProps = async () => {
  const data = await getAllData(["https://api.suzanschapendonk.nl/wp-json/wp/v2/pages/27","https://api.suzanschapendonk.nl/wp-json/wp/v2/posts?categories=17&orderby=title"]);

  return {
    props: {
      pageItems: data[1].data, 
      pageData: data[0].data
    }
  };
}

 export default Home;