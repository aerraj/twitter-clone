import type { AppProps } from 'next/app'
import Layout from '@/components/Layout'
import LoginModal from '@/components/Modals/LoginModal'
import RegisterModal from '@/components/Modals/RegisterModal'
import '@/styles/globals.css'


export default function App({ Component, pageProps }: AppProps) {
  return( 
  <>
  <RegisterModal/>
 <LoginModal/>
  <Layout>
     <Component {...pageProps} /> 
     </Layout>
  </>)
}
