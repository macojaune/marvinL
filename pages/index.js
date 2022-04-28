import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import TextSlider from '../components/TextSlider'
import { ProjectsData } from '../components/ProjectsData.js'
import ProjectSlider from '../components/ProjectsSlider'
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

      <main className="m-h-screen m-w-full pt-12 md:px-0">
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

          <p className="my-3 text-justify text-lg italic leading-snug md:text-left md:text-xl md:leading-tight">
            Si les fondations sont vos idées, <br className="md:hidden" /> je
            m’occupe des murs qui vont mettre{' '}
            <TextSlider
              list={['vos clients', 'votre business']}
              classes="text-dark-cyan"
            />{' '}
            à l’abri.
          </p>
        </div>
        {/*md:my-32 et md:py-32, objectif ?*/}
        <div className="flex flex-col px-5 md:flex-row md:py-8">
          <div className="md:w-1/3 md:py-6">
            <Image
              src={builderImg}
              alt=""
              className="drop-shadow-dark-cyan -translate-y-6 transform"
            />
          </div>
          <div className="flex flex-grow flex-col justify-between">
            <div>
              <h2 className="text-5xl tracking-tight md:text-3xl">
                <strong>Maçon</strong>, dis-tu ?
              </h2>
              <p className="my-6 leading-snug md:w-7/12 md:leading-tight">
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
            <p className="my-20 text-right text-2xl font-semibold tracking-tighter text-dark-cyan md:text-8xl md:tracking-tight">
              J'aime créer, <br />
              <span className="font-normal">résoudre les problèmes,</span>
              <br /> tester des idées{' '}
              <strike className="italic">saugrenues</strike>…
            </p>
          </div>
        </div>
        {/* <div className="mt-4 flex h-screen flex-col"> */}
          <ProjectSlider slides={ProjectsData}/>
          {/* <div className="flex flex-row h-5/6 md:px-14 md:py-5 bg-salmon">
            <div className="flex flex-col md:w-1/3 items-start justify-center">
              VARIABLE ICI
              <h2 className="md:text-4xl">Site e-commerce</h2>
              <p className="md:my-4">React + Wordpress + Opencart</p>
            </div>
            Créer compo pour carroussel (haut, bas), données dans tableau, 
            <div className="md:w-2/3 flex relative justify-center items-center">
              Smartphone et tablette
              <div className="w-3/4">
                <ProjectSlider/>
                <Image
                  src={devicesImg}
                  alt=""
                  height="354"
                  width="452"
                  layout="responsive"
                  priority=""
                  className=""
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col h-1/6 md:w-full justify-between bg-dark-cyan py-3 px-5">
            <div className="md:mx-96">
              <div className=" text-xl">J'ai bétonné</div>
              <div className="text-5xl font-semibold">
                Client<small className="font-light">.fr</small>
              </div>
            </div>
            <div className="text-right md:mx-96">
              
              <Link href="/projects/project" className="">
                <a>Détails</a>
              </Link>
            </div>
          </div> */}
        {/* </div> */}
      </main>
    </>
  )
}
