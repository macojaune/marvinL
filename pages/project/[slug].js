import Head from 'next/head'
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router'
import { motion } from "framer-motion"
import Image from 'next/image'
import Link from 'next/link'
import fs from 'fs';
import matter from 'gray-matter';
import md from 'markdown-it';
import backArrow from '../../public/backArrow.png'

export async function getStaticPaths () {
	const files = fs.readdirSync('projects');
	const paths = files.map((fileName) => ({
		params: {
			slug: fileName.replace('.md', ''),
		},
	}));
	return {
		paths,
		fallback: false,
	}
}

export async function getStaticProps({ params: { slug } }) {
	const fileName =fs.readFileSync(`projects/${slug}.md`, 'utf-8');
	const { data: frontmatter, content } = matter(fileName);

	var currentIndex = null;

	const files = fs.readdirSync('projects');
	const currentElt = files.map((fileName, index) => {
		if (slug === fileName.replace('.md', '')){
			currentIndex = index
		}

		return {
			currentIndex,
		}
	})

  return {
    props: {
      frontmatter,
      content,
			currentIndex,
			files,
    },
  }
}

export default function ProjectPage ({ frontmatter, content, currentIndex, files}) {

	const variants = {
    hidden: { opacity: 0, x: 0, y: 200 },
    enter: { opacity: 1, x: 0, y: 0 },
    exit: { opacity: 0, x: 0, y: 100 },
  }

	const router = useRouter();
	const skipDiv = useRef(null)
	const article = useRef(null)
	const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
		const screenHeight = window.innerHeight;
		const articleHeight = article.current.scrollHeight
		const skipDivHeight = skipDiv.current.scrollHeight
    const skipCap = skipDivHeight / 1.15 
		const position = window.pageYOffset;
		setScrollPosition(position)
		// console.log(position)

		if(position >= articleHeight - skipCap){
			console.log("Niveau atteint: redirection")
			// router.push("/#articles")
		}
  };
	
	// console.log("yep")
	// console.log(window.innerHeight)
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

	var nextProject = null

	const project = files.map((file, index) => {
		if (currentIndex < files.length - 1){
			// console.log(files[currentIndex + 1].replace('.md', ''))
			return files[currentIndex + 1].replace('.md', '')
		} else {
			// console.log(files[0].replace('.md', ''))
			return files[0].replace('.md', '')
		}
	})

	return (
		<motion.div 
			variants={variants} 
			initial={"hidden"}
			animate={"enter"}
			exit={"exit"} 
			transition={{ type: 'linear' }}
			className='flex flex-col'>
			<div className='flex flex-row'>
				<div className='w-1/12 px-1 md:w-24 md:pl-4 pt-12'>
					<Link href="/" scroll={false}>
						<a className="">
							<div className='md:sticky md:top-8'>
								<Image 
									src={backArrow}
									width="34"
									height="22"
									className=""
									alt=''
								/>
							</div>
						</a>
					</Link>
				</div>
				<article ref={article} className='w-full flex flex-row py-24 gap-7' onScroll={handleScroll}>
					<div className='w-full'>
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
					<div className='flex flex-col gap-5 w-9/12 pr-24'>
						<h1 className='text-5xl'>{frontmatter.title}</h1>
						<h1 className='text-xl'>{frontmatter.tech}</h1>
						<div className='text-lg text-justify' dangerouslySetInnerHTML={{ __html: md().render(content) }}></div>
					</div>
				</article>
			</div>
			<div ref={skipDiv} className='h-screen bg-salmon' onScroll={handleScroll}>
				Pour voir le projet suivant, scroll
			</div>
		</motion.div>
	)
}


