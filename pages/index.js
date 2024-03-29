import Image from 'next/image'
import Link from 'next/link'
import fs from 'fs';
import matter from 'gray-matter';
import TextSlider from '../components/TextSlider'
import { ProjectsData } from '../components/ProjectsData'
import ProjectsSlider from '../components/ProjectsSlider'
import ArticlesSlider from '../components/ArticlesSlider'
import ContactForm from '../components/ContactForm.js'
import builderImg from '../public/builder.png'
import { motion } from "framer-motion"

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

  const projectFiles = fs.readdirSync('projects')
  const projects = projectFiles.map((fileName) => {
    const slug = fileName.replace('.md', '');
    const readFile = fs.readFileSync(`projects/${fileName}`, 'utf-8');
    const { data: frontmatter } = matter(readFile);
      return {
        slug,
        frontmatter,
      };
  });

  return {
    props: {
      posts,
      projects,
    },
  };
}

export default function Home({ posts, projects }) {
  const variants = {
    hidden: { opacity: 0, x: 0, y: 200 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 100 },
  }
  return (
      <motion.main 
        variants={variants} 
        initial={"hidden"}
        animate={"enter"}
        exit={"exit"} 
        transition={{ type: 'linear' }}
        id="home" className="m-h-screen m-w-full pt-12 md:px-0"
      >
        <Link href='random'>
          <a>Page random</a>
        </Link>
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
        <div id="projects">
          <ProjectsSlider projects={projects}/>
        </div>
        <div id="articles" className="flex flex-col justify-center h-60 py-7 px-1 overflow-hidden bg-washed-white">
          <div className="text-salmon px-6 text-4xl font-semibold">J'ai écrit...</div>
          <ArticlesSlider posts={posts}/>
        </div>
        <div id="contact" className="flex flex-col h-screen justify-center items-center p-20">
          <ContactForm />
        </div>
      </motion.main>
  )
}