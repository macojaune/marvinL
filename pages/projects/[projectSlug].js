import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
// import fs from 'fs';
import backArrow from '../../public/backArrow.png'
import { ProjectsData } from '../../components/ProjectsData'
// import { getStaticProps } from '..'

export async function getStaticPaths () {
	// const files = fs.readFileSync(`projects/${projectSlug}`)
	const paths = ProjectsData.map((fileName, index) => ({
		params: {
			ind: index,
			projectSlug: fileName.url
		}
	}));

	return {
		paths,
		fallback: false,
	}
}

export async function getStaticProps({ params: { projectSlug, ind } }) {
	return {
		props: {
			projectSlug,
		}
	}
}

export default function Home ({ fileName, projectSlug, }) {

	return (
		<>
			{ProjectsData.map((project, index) => {
				return (
					<article key={project.url} className={`${project.url === projectSlug ? "" : "hidden"} flex flex-row bg-charcoal`}>
						<Link href="/#projects">
							<a className="w-1/12 h-max px-1 md:w-32 md:pl-4 pt-5">
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
						<div className='w-full h-screen flex justify-center items-center px-2 py-24 '>
							<div className="w-11/12 md:hidden">
								<Image
									src={project.imageMobile}
									alt=""
									height="207"
									width="119"
									layout="responsive"
									priority=""
									className=""
								/>
							</div>
							<div className="hidden md:block md:w-11/12">
								<Image
									src={project.image}
									alt=""
									height="347"
									width="525"
									layout="responsive"
									className=""
								/>
							</div>
						</div>
						<div className='w-7/12 h-screen overflow-auto flex flex-col gap-10 px-12 py-24'> 
							<h1 className='text-6xl'>{project.title}</h1>
							<p className='text-base'>{project.tech}</p>
							<p className='text-lg text-justify'>{project.description}</p>
							<p className='text-lg text-justify'>{project.description}</p>
						</div>
					</article>
				)
			})}
		</>
	)
}