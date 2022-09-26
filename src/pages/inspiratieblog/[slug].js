import React, { Fragment } from "react";
import { NextSeo } from "next-seo";
import Image from "next/image";
import axios from "axios";
import { decode } from "html-entities";
import TypeIt from "typeit-react";
import { SRLWrapper } from "simple-react-lightbox";
import baseStyles from "@/styles/Home.module.scss";
import styles from "./Inspiratieblog.module.scss";
import Layout from "@/components/Layout/Layout";
import TypedHeaderBasic from "@/components/TypedHeader/TypedHeaderBasic";
import WorkImage from "@/components/WorkImage/WorkImage";
import {useMediaQuery} from '@react-hook/media-query'

const fetchData = async (url) => 
  await axios
    .get(url)
    .then((res) => ({
      error: false,
      pageData: res.data,
    }))
    .catch(() => ({
      error: true,
      pageData: null,
    }));

const Blog = (props) => {
  const dataParsed = props.pageData[0].content.rendered.replaceAll('</p>','').replaceAll(/\n/g,'').split('<p>');
  let imageWidth = 20;
  const matches = useMediaQuery("only screen and (max-width: 780px)");
  if (matches) {
    imageWidth = 40;
  }
  let counter = 1;

  const ContentNode = dataParsed.map((item, i) => {
    const thisItem = item.trim().replaceAll('*','');

    if(thisItem==='imageLeft' || thisItem==='imageRight') {
        const thisCounter = counter;
        if(props.pageData[0].acf['afbeelding_'+thisCounter]) {
            counter ++;

            const aspectratio= props.pageData[0].acf['afbeelding_'+thisCounter].sizes['large-height']/props.pageData[0].acf['afbeelding_'+thisCounter].sizes['large-width']
            const divStyle = {
                width: `${imageWidth}vw`,
                height: `${imageWidth*aspectratio}vw`
           }

            return (
                <span className={thisItem == 'imageLeft' ? styles.imageLeft : styles.imageRight} key={'imagespan' + i} style={ divStyle }>
                <Image
                alt={props.pageData[0].acf['afbeelding_'+thisCounter].alt}
                src={props.pageData[0].acf['afbeelding_'+thisCounter].sizes.large}
                key={i + 'inline' + props.pageData[0].acf['afbeelding_'+thisCounter].ID}
                layout="fill"
                objectFit="contain"
                sizes="`${imageWidth}vw`"
            />
            </span>)
        }
    }
    return (<p key={i}
            dangerouslySetInnerHTML={{
              __html: thisItem,
            }}
          ></p>);
  });


  return (
    <Layout title={decode(props.pageData[0].title.rendered)} route={props.route}>
    <div className={styles.container}>

      {props.pageData[0] && (
        <div>
          <TypedHeaderBasic title={decode(props.pageData[0].title.rendered)} />
           {ContentNode}

        </div>
      )}
    </div>
    </Layout>
  );
};

export const getServerSideProps = async ({ params }) => {
  const data = await fetchData(
    "https://api.suzanschapendonk.nl/wp-json/wp/v2/posts?slug=" + params.slug
  );

  return {
    props: data,
  };
};

export default Blog;