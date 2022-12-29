import React, { useState, useEffect, useRef } from "react";
import Link from 'next/link'
import Image from "next/image"
import axios from "axios"
import parse, { domToReact } from 'html-react-parser';
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import styles from "./Contact.module.scss";
import Layout from "@/components/Layout/Layout";
import TypedHeaderBasic from "@/components/TypedHeader/TypedHeaderBasic"
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

const Contact = (props) => {

  const [ formSent, setFormSent ] = useState(false)
  const { register, handleSubmit } = useForm()
  const { submit } = useWeb3Forms({
    access_key: 'af3e402f-a0f7-4a93-94bc-15501059ba5d',
    settings: {
      from_name: 'Studio Suzan Schapendonk',
      subject: 'Nieuw bericht via je Website',
    },
    onSuccess: (message, data) => {
      setFormSent(true);
      console.log(message);
    },
    onError: (message, data) => {
      console.log(message);
    },
  });

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
    <Layout title="Contact" route="/contact">
    <div className={styles.container}>
        <div>
          <TypedHeaderBasic title="Contact" />
          {props.pageData.content.rendered && parse(props.pageData.content.rendered, parseOptions)}
          {!formSent ? ( 
            <form onSubmit={handleSubmit(submit)}>
              <label><span>Naam:</span> 
              <input
                type='text'
                {...register('name', {
                  required: 'Vul je naam in',
                  maxLength: 80,
                })}
              /></label>
              <label><span>Email:</span> 
              <input
                type='email'
                {...register('email', {
                  required: 'Vul je email in',
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: 'Voer een geldig emailadres in',
                  },
                })}
              /></label>
              <label><span>Bericht:</span> 
              <textarea
                {...register('message', {
                  required: 'Vul je bericht in',
                })}
              /></label>
              <button type='submit'>Versturen</button>
            </form> ) : 'Bericht verstuurd' }
        </div>
    </div>
    </Layout>
  );
};

export const getServerSideProps = async ({ params }) => {
  const data = await fetchData(
    "https://api.suzanschapendonk.nl/wp-json/wp/v2/pages/541"
  );

  return {
    props: data,
  };
};

export default Contact;