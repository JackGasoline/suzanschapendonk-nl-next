import React, { Fragment, useEffect, useRef } from "react";
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
import { useWindowWidth } from '@react-hook/window-size/throttled'

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
  let dataParsed = null;
  const windowWidth = useWindowWidth();
  let imageWidth = useRef(20);
  if (windowWidth < 780 && windowWidth > 0) {
    imageWidth.current = 40;
  }
  if (windowWidth > 3000) {
     imageWidth.current = 12;
  }
  let counter = 1;

  if(props.pageData[0].content.rendered) {
    dataParsed = props.pageData[0].content.rendered.replace(/<\/p>/g,'').replace(/\n/g,'').split('<p>');
  }
  useEffect(() => {
    if (windowWidth < 780 && windowWidth > 0) {
        imageWidth.current = 40;
    }
    if (windowWidth > 3000) {
        imageWidth.current = 12;
    }
  }, [windowWidth]);

  const ContentNode = dataParsed.map((item, i) => {
    const thisItem = item.trim().replace(/\*/g,'');

    if(thisItem==='imageLeft' || thisItem==='imageRight') {
        const thisCounter = counter;
        if(props.pageData[0].acf['afbeelding_'+thisCounter]) {
            counter ++;

            const aspectratio= props.pageData[0].acf['afbeelding_'+thisCounter].sizes['large-height']/props.pageData[0].acf['afbeelding_'+thisCounter].sizes['large-width']
            const divStyle = {
                width: `${imageWidth.current}vw`,
                height: `${imageWidth.current*aspectratio}vw`
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