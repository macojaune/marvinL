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
	return (
		<article className='prose max-w-none bg-dark-cyan flex flex-row'>
			<Link href="/">
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
						width="1365"
						height="594"
						className="rounded-bl-xl"
					/>
				</div>
				<div className='flex flex-row py-9'>
					<div className='w-24 pt-3 text-white text-right text-xs font-semibold'>{frontmatter.date}</div>
					<div className="pr-44 pl-5 w-full">
						<div className="pr-11">
							<h1 className="text-white text-4xl mb-8">{frontmatter.title}</h1>
							<div className="text-white text-sm leading-tight" dangerouslySetInnerHTML={{ __html: md().render(content) }} />
						</div>
						<div className="mt-24 flex flex-row pr-7 items-center justify-end not-prose">
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
										<div className='rounded-xl overflow-hidden h-32 w-64 flex flex-row bg-charcoal'>
											<div className="flex flex-col justify-end w-56 p-3 gap-y-3">
												<h2 className="text-xl font-medium">{frontmatter.title}</h2>
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
							))}
						</div>
					</div>
				</div>
			</div>
    </article>
  );
}