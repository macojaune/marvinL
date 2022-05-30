import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import fs from 'fs';
import matter from 'gray-matter';
import md from 'markdown-it';
import backArrow from '../../public/backArrow.png'
import { useState } from 'react';


export async function getStaticPaths() {
	const files = fs.readdirSync('posts');
	const posts = files.map((fileName) => {
    const slug = fileName.replace('.md', '');
    const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8');
    const { data: frontmatter } = matter(readFile);
      return {
        slug,
        frontmatter,
      };
  });
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

export async function getStaticProps ({ params: { slug }}) {
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

	const fileName = fs.readFileSync(`posts/${slug}.md`, 'utf-8');
	const { data: frontmatter, content } = matter(fileName);
	var ind = null;
	const elt = files.map((fileName, index) => {
    if (slug === fileName.replace('.md', '')){
			ind = index; 
		}
		return {
			ind,
		};
  });
	return {
		props: {
			ind,
			posts,
			frontmatter,
			content,
		},
	};
}

export default function PostPage({ frontmatter, content, posts, ind}) {
	const [hover,setHover] = useState(false)

	return (
		<article className='prose max-w-none bg-dark-cyan flex flex-row'>
			<Link href="/#articles">
				<a className="w-1/12 px-1 md:w-32 md:pl-4 pt-5">
					<div className='md:sticky md:top-8'>
						<Image 
							src={backArrow}
							width="34"
							height="22"
							className=""
						/>
					</div>
				</a>
			</Link>
			<div className='w-11/12 md:w-full text-white'>
				<div className='w-full h-96 relative'>
					<Image 
						src={frontmatter.image}
						layout="fill"
						objectFit='cover'
						className="rounded-bl-xl"
					/>
				</div>
				<div className='flex flex-col md:flex-row pb-9 md:py-9'>
					<div className='w-24 pt-3 text-white md:text-right text-xs font-semibold'>{frontmatter.date}</div>
					<div className="mt-2 md:pr-44 md:pl-5 w-full">
						<div className="pr-5 md:pr-11">
							<h1 className="text-white text-xl md:text-4xl md:mb-8">{frontmatter.title}</h1>
							<div className="text-white text-xs md:text-sm leading-tight" dangerouslySetInnerHTML={{ __html: md().render(content) }} />
						</div>
						<div className="mt-16 md:mt-24 flex flex-row pr-7 items-center justify-end not-prose">
							{posts.map(({slug, frontmatter}, index) => (
								<Link key={slug} href={`/post/${slug}`}>
									<a className={` ${ ind + 1 > posts.length - 1 ? index === 0 ? "inline" : "hidden" : index === ind + 1 ? "inline" : "hidden"}`}>
										<div className='flex flex-row items-center justify-end h-10 w-full'>
											<div className="w-16 text-sm leading-tight">continuer la lecture</div>
												<div className="w-10">
													<Image 
														src={backArrow}
														layout="responsive"
														height='22'
														width='34'
														className='-scale-100'
													/>
												</div>
											</div>
										<div onMouseEnter={() => setHover(index)} onMouseLeave={() => setHover(false)} style={{backgroundImage: `${hover === index ? `url(${frontmatter.image})` : "none"}`}} className='rounded-xl overflow-hidden h-32 w-66 flex flex-row bg-charcoal'>
											<div className={` ${hover === index ? "w-72 duration-200 bg-light-charcoal" : "" } flex flex-col justify-end w-56 p-3 gap-y-3`}>
												<h2 className="text-xl font-medium">{frontmatter.title}</h2>
											</div>
											<div className={`${hover === index ? "w-0 opacity-0 duration-200" : " duration-200"} w-24 relative`}>
												<Image 
													src={frontmatter.image}
													layout="fill"
													objectFit='cover'
												/>
											</div>
										</div>
									</a>
								</Link>
							))}
						</div>
					</div>
				</div>
			</div>
    </article>
  );
}