import '@/styles/globals.css'
import { DefaultSeo } from 'next-seo';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
