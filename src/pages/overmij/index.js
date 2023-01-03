import React, { Fragment, useEffect, useRef } from "react";
import Image from "next/image";
import Link from 'next/link'
import axios from "axios";
import { decode } from "html-entities";
import parse, { domToReact } from 'html-react-parser';
import styles from "./Overmij.module.scss";
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
  let dataParsed = null;
  const windowWidth = useWindowWidth();
  let imageWidth = useRef(40);
  let ContentNode = null;

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

  const parseOptions =  {
    replace: domNode => {
      if (domNode.attribs && domNode.name === 'img') {
        let imageNode = null
        let nodeClasses = domNode.attribs.class.split(' ')
        let imageID = Number(nodeClasses[1].replace('wp-image-',''))
        if ( !imageID ) {
          imageID = Number(nodeClasses[2].replace('wp-image-',''))
        }
        let imageObject = searchTree(Object.values(props.pageData.acf), imageID)
        if ( imageObject ) {
          imageNode = createImageTag(imageObject, nodeClasses[0])
          return imageNode
        }
      }
      if (domNode.attribs && domNode.name === 'a') {
        if (domNode.attribs.href.indexOf('http') < 0)
        return <Link href={domNode.attribs.href} passHref><a>{domToReact(domNode.children)}</a></Link> 
      }
    }
  }
    
  return (
    <Layout title={decode(props.pageData.title.rendered)} route={props.route} description="Welkom bij Studio Suzan Schapendonk. Je kunt bij me terecht voor illustraties en ontwerpen. Mijn expertise is maatwerk.">
    <div className={styles.container}>

      {props.pageData && (
        <div>
          <TypedHeaderBasic title={decode(props.pageData.title.rendered)} />
           {props.pageData.content.rendered && parse(props.pageData.content.rendered, parseOptions)}

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