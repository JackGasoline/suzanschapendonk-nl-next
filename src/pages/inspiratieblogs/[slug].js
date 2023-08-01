import React, { useEffect, useRef } from "react";
import Image from "next/image";
import axios from "axios";
import { decode } from "html-entities";
import parse from 'html-react-parser';
import styles from "./Inspiratieblog.module.scss";
import Layout from "@/components/Layout/Layout";
import TypedHeaderBasic from "@/components/TypedHeader/TypedHeaderBasic";
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
  const windowWidth = useWindowWidth();
  let imageWidth = useRef(40);

  useEffect(() => {
    if (windowWidth > 780) {
        imageWidth.current = 20;
    }
    if (windowWidth > 3000) {
        imageWidth.current = 12;
    }
  }, [windowWidth]);

  const searchTree = (arr, searchKey) => {
    return arr.find(o => o.id === searchKey);
  }

  const createImageTag = ( imageObject, alignment ) => {
    const aspectratio = 100 * imageObject.sizes['large-height'] / imageObject.sizes['large-width']
    const divStyle = {
      width: "100%",
      paddingTop: `${aspectratio}%`,
      display: "block"
    }

    return (
      <span key={'inline-image-' + imageObject.ID} className={alignment === 'alignright' ? styles.imageRight : styles.imageLeft}>
          <span style={ divStyle }>
              <Image
              alt={imageObject.alt}
              src={imageObject.sizes.large}
              key={'inline' + imageObject.ID}
              layout="fill"
              objectFit="contain"
              sizes="`${imageWidth.current}vw`" />
          </span>
      </span>)
  }

  const parseOptions = {
    replace: domNode => {
      if (domNode.attribs && domNode.name === 'img') {
        let imageNode = null
        let nodeClasses = domNode.attribs.class.split(' ')
        let imageID = Number(nodeClasses[1].replace('wp-image-',''))
        if ( !imageID ) {
          imageID = Number(nodeClasses[2].replace('wp-image-',''))
        }
        let imageObject = searchTree(Object.values(props.pageData[0].acf), imageID)
        if ( imageObject ) {
          imageNode = createImageTag(imageObject, nodeClasses[0])
          return imageNode
        }
      }
    }
  }

  return (
    <Layout title={decode(props.pageData[0].title.rendered)} route={props.route}>
    <div className={styles.container}>

      {props.pageData[0] && (
        <div>
          <TypedHeaderBasic title={decode(props.pageData[0].title.rendered)} />
           {props.pageData[0].content.rendered && parse(props.pageData[0].content.rendered, parseOptions)}

        </div>
      )}
    </div>
    </Layout>
  );
};

export const getServerSideProps = async ({ params }) => {
  const data = await fetchData(
    "https://api.suzanschapendonk.nl/wp-json/wp/v2/posts?slug=" + params.slug + "&time=" + Date.now()
  );

  return {
    props: data,
  };
};

export default Blog;