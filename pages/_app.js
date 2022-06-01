// import '../styles/_reset.css'
import '../styles/globals.css'
import '../styles/global.sass'
import Layout from "../components/Header"

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp