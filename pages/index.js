import Head from 'next/head'
import Image from 'next/image'
import TextSlider from '../components/TextSlider'
import builderImg from '../public/builder.png'

export default function Home() {
  return (
    <>
      <Head>
        <title>MarvinL.com</title>
        <meta name="description" content="Le maçon du web efficace" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="m-h-screen m-w-full pt-16 md:px-0">
        <div className="flex flex-col items-center justify-center px-5">
          <h1 className="text-left">
            <span className="font-mono text-base leading-tight">
              SALUT, JE SUIS
            </span>
            <br />
            <strong className="text-8xl font-semibold leading-none md:text-9xl">
              Marvin
            </strong>
            <small className="break-words text-4xl text-salmon ">
              , le maçon du web efficace
            </small>
          </h1>

          <p className="my-9 text-justify text-lg italic leading-snug md:text-left md:text-xl md:leading-tight">
            Si les fondations sont vos idées, <br className="md:hidden" /> je
            m’occupe des murs qui vont mettre{' '}
            <TextSlider
              list={['vos clients', 'votre business']}
              classes="text-dark-cyan"
            />{' '}
            à l’abri.
          </p>
        </div>
        <div className="flex flex-col px-5  md:my-32 md:flex-row md:py-32">
          <div className="md:w-1/5 md:p-20">
            <Image
              src={builderImg}
              alt=""
              className="drop-shadow-dark-cyan -translate-y-6 transform"
            />
          </div>
          <div className="flex flex-grow flex-col justify-between md:px-8">
            <div>
              <h2 className="text-5xl tracking-tight md:text-6xl">
                <strong>Maçon</strong>, dis-tu ?
              </h2>
              <p className="my-6 leading-snug md:w-2/5 md:leading-tight">
                <strike>Presque</strike> 30ans, passionné de mode sombre et de
                textes colorés qui défilent…
                <br />
                Je vis la nuit et me prélasse la journée, un mode de vie
                complètement à l'opposé de ce qu'attendaient mes derniers
                patrons. <br />
                <strong className="font-mono uppercase leading-loose tracking-wider text-salmon">
                  J'ai fait mon choix.
                </strong>
              </p>
              <p className="leading-snug md:leading-tight">
                J'évolue en <b className="text-salmon">Freelance</b> depuis 2013
                environ.
                <br />
                J'ai pu toucher à tout plein de langages et frameworks. <br />
                <br className="hidden md:block" />
                Pas de jaloux, je me considère aussi{' '}
                <b className="text-salmon">Full-Stack</b> que le laisse entendre
                ce terme.
              </p>
            </div>
            <p className="my-5 text-right text-2xl font-semibold tracking-tighter text-dark-cyan md:text-8xl md:tracking-tight">
              J'aime créer, <br />
              <span className="font-normal">résoudre les problèmes,</span>
              <br /> tester des idées{' '}
              <strike className="italic">saugrenues</strike>…
            </p>
          </div>
        </div>
        <div className="mt-4 flex h-screen flex-col">
          <div className="flex flex-grow bg-salmon py-10 px-5">tets</div>
          <div className="flex h-44 flex-col justify-between bg-dark-cyan py-5 px-5">
            <div>
              <div className=" text-xl">J'ai bétonné</div>
              <div className="text-5xl font-semibold">
                Client<small className="font-light">.fr</small>
              </div>
            </div>
            <div className="text-right">
              <a href="" className="">
                -> Détails
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}