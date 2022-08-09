import { DefaultSeo } from 'next-seo'
import SimpleReactLightbox from 'simple-react-lightbox'
import SEO from '@/next-seo.config'
import '@/styles/app.scss'
import { AnimatePresence, AnimateSharedLayout } from "framer-motion"

function MyApp({ Component, pageProps, router }) {
  console.log(router.route) 

  return (
    <SimpleReactLightbox>
      <DefaultSeo {...SEO} />
      <AnimateSharedLayout exitBeforeEnter>
        <Component {...pageProps} route={router.route} />
      </AnimateSharedLayout>
    </SimpleReactLightbox>
  )
}

export default MyApp
