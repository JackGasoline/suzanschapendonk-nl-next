import { DefaultSeo } from 'next-seo'
import SEO from '@/next-seo.config'
import '@/styles/app.scss'

function MyApp({ Component, pageProps }) {
  console.log(SEO);

  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
