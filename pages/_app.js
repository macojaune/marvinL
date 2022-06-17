// import '../styles/_reset.css'
import '../styles/globals.css'
import '../styles/global.sass'
import Layout from '../components/Header'
import { AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps, router }) {
  return (
    <Layout>
      <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={() => {
          window.scrollTo(0, 0)
        }}
      >
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </Layout>
  )
}

export default MyApp
