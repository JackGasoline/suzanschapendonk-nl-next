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
import { Email } from "react-obfuscate-email"
import DotLoader from "react-spinners/DotLoader"

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

  const [ formSent, setFormSent ] = useState('notsubmitted')
  const formRef = useRef(null)
  const { register, handleSubmit } = useForm()
  const { submit } = useWeb3Forms({
    access_key: '43033dde-3dc7-45ab-95f8-0caf749ac36f',
    settings: {
      from_name: 'Studio Suzan Schapendonk',
      subject: 'Nieuw bericht via je Website',
    },
    onSuccess: (message, data) => {
      setFormSent('sent');
      console.log(message);
    },
    onError: (message, data) => {
      setFormSent('notsubmitted');
      console.log(message);
    },
  });

  const windowWidth = useWindowWidth();
  let imageWidth = useRef(40);

  const override = {
    display: "block",
    margin: "-50% 50%",
    position: "relative",
    borderColor: "red",
  };

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

  useEffect(() => {
    const handleSubmitEvent = event => {
      setFormSent('sending');
    };

    const element = formRef.current;

    if (element) {element.addEventListener('submit', handleSubmitEvent)}

    return () => {
      if (element) {element.removeEventListener('csubmit', handleSubmitEvent)}
    };
  }, []);

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
        if (domNode.attribs.href.indexOf('mailto:') === 0) {
          let mailAddress = domNode.attribs.href.replace('mailto:','')
          let atSymbol = '<!-- no spam -->@<!-- no spam -->'
          let displayAddress = mailAddress.replace('@',atSymbol)
          return (<Email email={mailAddress}><span dangerouslySetInnerHTML={{ __html: `${displayAddress}` }} /></Email>)
        }
        if (domNode.attribs.href.indexOf('http') < 0) {
          return <Link href={domNode.attribs.href} passHref><a>{domToReact(domNode.children)}</a></Link> 
        }        
      }
    }
  }

  return (
    <Layout title="Contact" route="/contact">
    <div className={styles.container}>
        <div>
          <TypedHeaderBasic title="Contact" />
          {props.pageData.content.rendered && parse(props.pageData.content.rendered, parseOptions)}
          <div className={styles.formContainer}>
          {formSent === 'notsubmitted' || formSent === 'sending' ? ( 
            <form ref={formRef} onSubmit={handleSubmit(submit)} className={styles[formSent]}>
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
            </form> ) : <span className={styles.messageSent}>Je bericht is verstuurd!</span> }
            <DotLoader
              color="#018387"
              loading={formSent === 'sending' ? true : false}
              cssOverride={override}
              size={imageWidth.current*3}
              aria-label="Loading Spinner"
              data-testid="loader"
              className={styles.spinner}
            />
            </div>
        </div>
    </div>
    </Layout>
  );
};

export const getServerSideProps = async ({ params }) => {
  const data = await fetchData(
    "https://api.suzanschapendonk.nl/wp-json/wp/v2/pages/541?time=" + Date.now()
  );

  return {
    props: data,
  };
};

export default Contact;