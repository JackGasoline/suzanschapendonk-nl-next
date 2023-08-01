import React, { Fragment } from "react";
import Image from "next/image";
import axios from "axios";
import { decode } from "html-entities";
import { SRLWrapper } from "simple-react-lightbox";
import Link from 'next/link'
import parse, { domToReact } from 'html-react-parser';
import { Email } from "react-obfuscate-email"
import styles from "./Mijnwerk.module.scss";
import Layout from "@/components/Layout/Layout";
import TypedHeaderBasic from "@/components/TypedHeader/TypedHeaderBasic";

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

const Prints = (props) => {

  const parseOptions =  {
    replace: domNode => {
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
    <Layout title={decode(props.pageData[0].title.rendered)} route={props.route}>
    <div className={styles.container}>

      {props.pageData[0] && (
        <div>
          <TypedHeaderBasic title={decode(props.pageData[0].title.rendered)} />
        {props.pageData[0].content.rendered && parse(props.pageData[0].content.rendered, parseOptions)}
        </div>
      )}
      {props.pageData[0].acf && (
        <div className={styles.imageContainer}>
          <SRLWrapper>
            {Object.keys(props.pageData[0].acf).map((key, i) => (
                <div className={styles.imageItem} key={`imageitem${i}`}>
                  
                  {props.pageData[0].acf[key].sizes && (
                    <Fragment>
                      <a href={props.pageData[0].acf[key].url} key={`workitem${i}`} className={styles.workimage}>
                      <Image
                        alt={props.pageData[0].acf[key].alt}
                        src={props.pageData[0].acf[key].sizes.large}
                        key={props.pageData[0].acf[key].ID}
                        layout="fill"
                        objectFit="contain"
                        sizes="12.8vw"
                      />
                      </a>
                      <a  className={styles.workLinkText} href={props.pageData[0].acf[key].url} key={`workitem${i}`}>
                        {props.pageData[0].acf[key].alt}
                      </a>
                    </Fragment>

                  )}
                </div>
              ))}
          </SRLWrapper>
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

export default Prints;
