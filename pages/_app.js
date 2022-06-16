// import '../styles/_reset.css'
import '../styles/globals.css'
import '../styles/global.sass'
import Layout from "../components/Header"
import { AnimatePresence, motion } from "framer-motion"

function MyApp({ Component, pageProps }) {

  return (
    <Layout>
      <AnimatePresence 
        exitBeforeEnter
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} />
      </AnimatePresence>
    </Layout>
  )
}

export default MyApp