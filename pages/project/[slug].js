import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import fs from 'fs'
import matter from 'gray-matter'
import md from 'markdown-it'
import backArrow from '../../public/backArrow.png'

export async function getStaticPaths() {
  const files = fs.readdirSync('projects')
  const paths = files.map((fileName, index) => ({
    params: {
      slug: fileName.replace('.md', ''),
    },
  }))
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }) {
  const fileName = fs.readFileSync(`projects/${slug}.md`, 'utf-8')
  const { data: frontmatter, content } = matter(fileName)

  const files = fs.readdirSync('projects')
  const index = files.findIndex((f) => f.includes(slug))

  return {
    props: {
      frontmatter,
      content,
      prev: files?.[index - 1]?.replace('.md', '') || null,
      next: files?.[index + 1]?.replace('.md', '') || null,
    },
  }
}
const variants = {
  hidden: { opacity: 0, x: 0, y: 200 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 100 },
}
export default function ProjectPage({ frontmatter, content, next, prev }) {
  const router = useRouter()
  const skipDiv = useRef(null)
  const article = useRef(null)

  const [lastPos, setPos] = useState()
  const posRef = useRef(lastPos)

  const handleScroll = () => {
    const articleHeight = article.current.scrollHeight
    const skipDivHeight = skipDiv.current.scrollHeight
    const skipCap = skipDivHeight / 1.15
    const position = window.scrollY

    //redirect only on scroll down (not initial scroll up)
    if (posRef.current < position && position >= articleHeight - skipCap) {
      console.log('Niveau atteint: redirection', next)
      if (next) router.push('./' + next)
    }
    //update scroll lastPosition
    posRef.current = position
    setPos(position)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.div
      variants={variants}
      initial={'hidden'}
      animate={'enter'}
      exit={'exit'}
      transition={{ type: 'linear' }}
      className="flex flex-col"
    >
      <div className="flex flex-row">
        <div className="w-1/12 px-1 pt-12 md:w-24 md:pl-4">
          <Link href="/" scroll={false}>
            <a className="">
              <div className="md:sticky md:top-8">
                <Image
                  src={backArrow}
                  width="34"
                  height="22"
                  className=""
                  alt=""
                />
              </div>
            </a>
          </Link>
        </div>
        <article
          ref={article}
          className="flex w-full flex-row gap-7 py-24"
          onScroll={handleScroll}
        >
          <div className="w-full">
            <div className="w-1/2 md:hidden">
              <Image
                src={require('../../public/' + frontmatter.imageMobile)}
                alt=""
                height="207"
                width="119"
                layout="responsive"
                priority=""
                className=""
              />
            </div>
            <div className="hidden md:block">
              <Image
                src={require('../../public/' + frontmatter.image)}
                alt=""
                height="347"
                width="525"
                layout="responsive"
                className=""
              />
            </div>
          </div>
          <div className="flex w-9/12 flex-col gap-5 pr-24">
            <h1 className="text-5xl">{frontmatter.title}</h1>
            <h1 className="text-xl">{frontmatter.tech}</h1>
            <div
              className="text-justify text-lg"
              dangerouslySetInnerHTML={{ __html: md().render(content) }}
            ></div>
          </div>
        </article>
      </div>
      <div ref={skipDiv} className="h-screen bg-salmon" onScroll={handleScroll}>
        Pour voir le projet suivant, scroll
      </div>
    </motion.div>
  )
}
