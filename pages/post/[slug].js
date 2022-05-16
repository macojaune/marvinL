import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import fs from 'fs';
import matter from 'gray-matter';
import md from 'markdown-it';
import backArrow from '../../public/backArrow.png'


export async function getStaticPaths() {
	const files = fs.readdirSync('posts');
	const paths = files.map((fileName) => ({
		params: {
			slug: fileName.replace('.md', ''),
		},
	}));
	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps ({ params: { slug } }) {
	const fileName = fs.readFileSync(`posts/${slug}.md`, 'utf-8');
	const { data: frontmatter, content } = matter(fileName);
	return {
		props: {
			frontmatter,
			content,
		},
	};
}

export default function PostPage({ frontmatter, content }) {
  return (
    <article className='prose max-w-none bg-dark-cyan flex flex-row'>
			<Link href="../">
				<a className="w-32 h-fit pl-4 pt-5">
					<div className=''>
						<Image 
							src={backArrow}
							width="34"
							height="22"
							className=""
						/>
					</div>
				</a>
			</Link>
			<div className='w-full text-white'>
				<div className='w-full'>
					<Image 
						src={frontmatter.socialImage}
						width={frontmatter.width}
						height={frontmatter.height}
						// WIDTH ET HEIGHT SUIVANTS A SUPPRIMER
						width="1365"
						height="594"
						className="rounded-bl-xl"
					/>
				</div>
				<div className='flex flex-row py-9'>
					{/* EXEMPLE DATE AS SUPPRIMER */}
					{/* FIX ????? Donc pourquoi les dim changent ? */}
					<div className='w-24 pt-3 text-white text-right text-xs font-semibold'>1 mai 2022</div>
					{/* <div className='w-48 pt-3 text-white text-right text-xs font-semibold'>{frontmatter.date}</div> */}
					<div className="pr-44 pl-5 w-full">
						<div className="pr-11">
							<h1 className="text-white text-4xl mb-8">{frontmatter.title}</h1>
							<div className="text-white text-sm leading-tight" dangerouslySetInnerHTML={{ __html: md().render(content) }} />
						</div>
						<Link href="#">
							<a className="not-prose no-underline mt-10 mr-8 float-right flex flex-col">
								<div className="mb-2 flex flex-row justify-end items-center">
									<div className="w-14 text-xs text-white leading-tight">continuer la lecture</div>
									<div className="flex items-center">
										<Image 
											src={backArrow}
											width="36"
											height="24"
											className="rotate-180"
										/>
									</div>
								</div>
								{/* PRE-DEFINE HEIGHT AND WIDTH IN TAILWINDCONFIG */}
								<div className="rounded-xl overflow-hidden w-64 h-28 flex flex-row bg-charcoal">
									<div className="flex flex-col justify-end w-56 p-3 gap-y-3">
										<h2 className="text-l text-white font-medium">{frontmatter.title}</h2>
									</div>
									<div className="w-24">
										<Image 
											src={frontmatter.socialImage}
											layout="responsive"
											height='1000'
											width='500'
										/>
									</div>
								</div>
							</a>
						</Link>
					</div>
				</div>
			</div>
    </article>
  );
}