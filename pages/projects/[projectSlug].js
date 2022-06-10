import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import backArrow from '../../public/backArrow.png'
import { ProjectsData } from '../../components/ProjectsData'

export async function getStaticPaths () {
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
					<article className={`flex flex-row bg-charcoal pb-16 md:pb-0`}>
						<div className='w-1/6 sticky top-12 md:top-9 h-max md:w-28 flex justify-center items-center p-2'>
							<Link href="/#projects">
								<a className="p-3">
									<div className=''>
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
						{ProjectsData.map((project, index) => (
							<div key={project.url} className={` ${project.url === projectSlug ? "" : "hidden"} w-full flex flex-col pr-6 md:pr-0 md:gap-6 md:flex-row`}>
								<div className='w-full top-0 md:sticky md:h-screen flex justify-start md:justify-center items-center py-12 md:py-24'>
									<div className="w-1/2 md:hidden">
										<Image
											src={require('../../public/' + project.imageMobile)}
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
											src={require('../../public/' + project.image)}
											alt=""
											height="347"
											width="525"
											layout="responsive"
											className=""
										/>
									</div>
								</div>
								<div className='md:w-8/12 flex flex-col gap-5 md:gap-10 md:pr-24 md:py-24'> 
									<h1 className='text-6xl'>{project.title}</h1>
									<p className='text-base'>{project.tech}</p>
									<p className='text-lg text-justify'>{project.description}</p>
									<p className='text-lg text-justify'>{project.description}</p>
								</div>
							</div>
						))}
					</article>
		</>
	)
}