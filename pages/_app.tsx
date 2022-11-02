import { AppProps } from 'next/app'
import '../styles/globals.scss'
import 'antd/dist/antd.css'
// import Layout from '../src/AppLayout'


function MyApp({ Component, pageProps }:AppProps) {
  return(
    // <Layout>
      <Component {...pageProps} />
    // </Layout> 
  )
}

export default MyApp
