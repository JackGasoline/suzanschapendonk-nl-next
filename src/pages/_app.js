import { DefaultSeo } from 'next-seo'
import SimpleReactLightbox from 'simple-react-lightbox'
import SEO from '@/next-seo.config'
import '@/styles/app.scss'

function MyApp({ Component, pageProps }) {
  console.log(SEO);

  return (
    <SimpleReactLightbox>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </SimpleReactLightbox>
  )
}

export default MyApp
