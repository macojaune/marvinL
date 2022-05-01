import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import fs from 'fs';
import matter from 'gray-matter';
import TextSlider from '../components/TextSlider'
import { ProjectsData } from '../components/ProjectsData.js'
import ProjectsSlider from '../components/ProjectsSlider'
import builderImg from '../public/builder.png'
import leftArrow from '../public/leftArrow.png'
import rightArrow from '../public/rightArrow.png'


export async function getStaticProps() {
  const files = fs.readdirSync('posts')

  const posts = files.map((fileName) => {
      const slug = fileName.replace('.md', '');
      const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8');
      const { data: frontmatter } = matter(readFile);
      return {
          slug,
          frontmatter,
      };
  });

  return {
      props: {
          posts,
      },
  };
}

export default function Home({ posts }) {
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

          <p className="my-6 text-justify text-lg italic leading-snug md:text-left md:text-xl md:leading-tight">
            Si les fondations sont vos idées, <br className="md:hidden" /> je
            m’occupe des murs qui vont mettre{' '}
            <TextSlider
              list={['vos clients', 'votre business']}
              classes="text-dark-cyan"
            />{' '}
            à l’abri.
          </p>
        </div>
        <div className="flex flex-col px-5 md:flex-row md:py-4">
          <div className="md:w-1/5 md:p-5">
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
            <p className="my-5 text-right text-2xl font-semibold tracking-tighter text-dark-cyan md:text-4xl md:tracking-tight">
              J'aime créer, <br />
              <span className="font-normal">résoudre les problèmes,</span>
              <br /> tester des idées{' '}
              <strike className="italic">saugrenues</strike>…
            </p>
          </div>
        </div>
        <ProjectsSlider slides={ProjectsData}/>
        <div className="flex md:flex-col md:h-screen p-5">
			{/* <div className="text-6xl font-bold">Articles</div> */}
        <div className="flex justify-between h-fit items-center p-10 px-20">
          <div className="w-7">
            <Image
              src={leftArrow}
              alt=""
              height="24"
              width="24"
              layout="responsive"
              priority=""
              className="cursor-pointer"
            />
          </div>
          <div className="grid grid-cols-3 gap-x-2 h-full justify-around">
            {posts.map(({slug, frontmatter}) => (
              <div key={slug}>
                  <Link href={`/post/${slug}`}>
                  <a className="">
                    <div className="flex flex-col h-1/2">
                      <div className="">
                        <Image 
                          src={frontmatter.socialImage}
                          layout="responsive"
                          width='997'
                          height='400'
                          className=""
                        />
                      </div>
                      <div className="h-3/4 p-3">
                        <h2 className="text-2xl font-bold">{frontmatter.title}</h2>
                        <p className="font-light">{frontmatter.metaDesc}</p>
                      </div>
                    </div>
                  </a>
                </Link>
              </div>
            ))}
          </div>
          <div className="w-7">
            <Image
              src={rightArrow}
              alt=""
              height="24"
              width="24"
              layout="responsive"
              priority=""
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
        <div className="h-screen">
          Me contacter ?
        </div>
      </main>
    </>
  )
}
