import { DefaultSeo } from 'next-seo'
import Head from 'next/head'
import SimpleReactLightbox from 'simple-react-lightbox'
import SEO from '@/next-seo.config'
import '@/styles/app.scss'
import { AnimatePresence, AnimateSharedLayout } from "framer-motion"
import { useKeyboardNavigationDetection } from '@/hooks/useKeyboardNavigationDetection';

function MyApp({ Component, pageProps, router }) {

  useKeyboardNavigationDetection();

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <SimpleReactLightbox>
        <DefaultSeo {...SEO} />
        <AnimateSharedLayout exitBeforeEnter>
          <Component {...pageProps} route={router.route} />
        </AnimateSharedLayout>
      </SimpleReactLightbox>
    </>
  )
}

export default MyApp
