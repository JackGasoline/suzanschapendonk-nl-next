import React, {Fragment} from 'react'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import axios from 'axios'
import {decode} from 'html-entities'
import TypeIt from 'typeit-react'
import styles from '@/styles/Home.module.scss'
import moreStyles from './Mijnwerk.module.scss'
import WorkImage from '@/components/WorkImage/WorkImage'

const fetchData = async (url) => await axios.get(url)
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
  console.log(props.pageData);
  return (
    <div className={styles.container}>
      <NextSeo title={props.pageData[0] ? decode(props.pageData[0].title.rendered) : undefined} />

      {props.pageData[0] && (
        <div>
          <h1 className={moreStyles.mijnWerkHeader}>
              <TypeIt options={{cursor: false}}>{decode(props.pageData[0].title.rendered)}</TypeIt>
          </h1>
          <div dangerouslySetInnerHTML={{__html: props.pageData[0].content.rendered}}></div>
        </div>
      )}
    {props.pageData[0].acf && (
      <div className={styles.imageContainer}>
      {props.pageData[0] && Object.keys(props.pageData[0].acf).map((key, i) => (
          <Fragment key={`workitem${i}`}>
            {props.pageData[0].acf[key].sizes && <WorkImage alt={props.pageData[0].acf[key].alt} src={props.pageData[0].acf[key].sizes.medium} key={props.pageData[0].acf[key].ID} id={props.pageData[0].acf[key].ID} />}
          </Fragment>
        ))}
      </div>
    )}


    </div>
  )
}

export const getServerSideProps = async ({ params }) => {

  const data = await fetchData('https://api.suzanschapendonk.nl/wp-json/wp/v2/posts?slug=' + params.slug);

  return {
    props: data,
  };
}

 export default Home;