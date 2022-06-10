import Head from 'next/head'
import Menu from '../components/Menu'


export default function Layout({ children }) {
  return(
    <div>
      <Head>
        <title>MarvinL.com</title>
        <meta name="description" content="Le maçon du web efficace" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&family=Major+Mono+Display&display=swap" rel="stylesheet"/>
      </Head>
      <header className="h-0 sticky top-20 md:top-16 z-10 mx-5 md:mx-10 flex items-center justify-end">
        <Menu/>
      </header>
      {children}
    </div>
  )
}