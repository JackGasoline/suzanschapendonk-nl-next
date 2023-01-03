import Image from 'next/image'
import Link from 'next/link'
import parse, { domToReact } from 'html-react-parser'
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

const Mijnwerk = props => {
  //console.log(props.pageData)
  //console.log(props.pageData);

  const parseOptions =  {
    replace: domNode => {
      if (domNode.attribs && domNode.name === 'a') {
        if (domNode.attribs.href.indexOf('http') < 0)
        return <Link href={domNode.attribs.href} passHref><a>{domToReact(domNode.children)}</a></Link> 
      }
    }
  }

  return (
    <Layout title="Mijn Werk" route={props.route} description="Ik maak zowel illustraties en ontwerpen in opdracht als vrij werk. Op deze pagina vind je een overzicht van mijn portfolio met daarin naast een aantal eigen projecten, het werk dat ik voor verschillende opdrachtgevers heb gemaakt.">
    <div className={styles.container}>
    {props.pageData && (
        <div>
          <TypedHeaderBasic title={decode(props.pageData.title.rendered)} />
          {props.pageData.content.rendered && parse(props.pageData.content.rendered, parseOptions)}
        </div>
      )}


    <div className={styles.imageContainer}>
      <div>
      {props.pageItems.map((post) => (
          <div className={styles.imageItem} key={post.id}>
            <Link href={`/mijnwerk/${post.slug}`} passHref>
            <a className={styles.workimage}>{post.acf['afbeelding_1'].sizes.woocommerce_single && 
              <Image src={post.acf['afbeelding_1'].sizes.woocommerce_single} alt={post.acf['afbeelding_1'].alt}                       
                layout="fill"
                objectFit="contain"
                sizes="12.8vw" />}
            </a></Link>
            <Link href={`/mijnwerk/${post.slug}`} passHref>
              <a className={styles.workLinkText}>{`${decode(post.title.rendered)}`}</a>
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
  const data = await getAllData([
    "https://api.suzanschapendonk.nl/wp-json/wp/v2/pages/27?_fields[]=title&_fields[]=content",
    "https://api.suzanschapendonk.nl/wp-json/wp/v2/posts?categories=17&orderby=date&_fields[]=id&_fields[]=title&_fields[]=slug&_fields[]=acf.afbeelding_1.id&_fields[]=acf.afbeelding_1.title&_fields[]=acf.afbeelding_1.url&_fields[]=acf.afbeelding_1.sizes.woocommerce_single&_fields[]=acf.afbeelding_1.alt&per_page=25",
  ]);

  return {
    props: {
      pageItems: data[1].data, 
      pageData: data[0].data
    }
  };
}

 export default Mijnwerk;