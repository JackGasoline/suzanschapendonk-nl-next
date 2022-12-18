import React, { Fragment, useEffect, useRef } from "react";
import { NextSeo } from "next-seo";
import Image from "next/image";
import axios from "axios";
import { decode } from "html-entities";
import TypeIt from "typeit-react";
import { SRLWrapper } from "simple-react-lightbox";
import baseStyles from "@/styles/Home.module.scss";
import styles from "./Overmij.module.scss";
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
  let imageWidth = useRef(40);
  let counter = 1;

  if(props.pageData.content.rendered) {
    dataParsed = props.pageData.content.rendered.replace(/<\/p>/g,'').replace(/\n/g,'').split('<p>');
  }


  useEffect(() => {
    if (windowWidth > 780) {
        imageWidth.current = 20;
    }
    if (windowWidth > 3000) {
        imageWidth.current = 12;
    }
  }, [windowWidth]);

  const ContentNode = dataParsed.map((item, i) => {
    const thisItem = item.trim().replace(/\*/g,'');

    if(thisItem==='imageLeft' || thisItem==='imageRight') {
        const thisCounter = counter;
        if(props.pageData.acf['afbeelding_'+thisCounter]) {
            counter ++;

            const aspectratio = 100 * props.pageData.acf['afbeelding_'+thisCounter].sizes['large-height'] / props.pageData.acf['afbeelding_'+thisCounter].sizes['large-width']

            const divStyle = {
                width: "100%",
                paddingTop: `${aspectratio}%`,
                display: "block"
           }

            return (
            <span key={i} className={thisItem == 'imageLeft' ? styles.imageLeft : styles.imageRight}>
                <span style={ divStyle }>
                    <Image
                    alt={props.pageData.acf['afbeelding_'+thisCounter].alt}
                    src={props.pageData.acf['afbeelding_'+thisCounter].sizes.large}
                    key={i + 'inline' + props.pageData.acf['afbeelding_'+thisCounter].ID}
                    layout="fill"
                    objectFit="contain"
                    sizes="`${imageWidth}vw`" />
                </span>
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
    <Layout title={decode(props.pageData.title.rendered)} route={props.route}>
    <div className={styles.container}>

      {props.pageData && (
        <div>
          <TypedHeaderBasic title={decode(props.pageData.title.rendered)} />
           {ContentNode}

        </div>
      )}
    </div>
    </Layout>
  );
};

export const getServerSideProps = async ({ params }) => {
  const data = await fetchData(
    "https://api.suzanschapendonk.nl/wp-json/wp/v2/pages/2"
  );

  return {
    props: data,
  };
};

export default Blog;