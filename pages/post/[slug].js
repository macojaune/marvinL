import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import fs from 'fs';
import matter from 'gray-matter';
import md from 'markdown-it';

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

// export default function PostPage({ frontmatter, content }) {
// 	return (
// 		<div className='px-72'>
// 			<div className='h-screen'>
// 				<div className="h-1/2">
// 					<Image 
// 						src={frontmatter.socialImage}
// 						layout="responsive"
// 						width='997'
// 						height='400'
// 						className=""
// 					/>
// 				</div>
// 				<h1 className='text-6xl text-center mt-5'>{frontmatter.title}</h1>
// 				<p className='text-xl text-salmon'>Auteur : </p>
// 				<p className='text-xl text-salmon'>Date : </p>
// 			</div>
// 			<div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
// 		</div>
// 	);
// }


export default function PostPage({ frontmatter, content }) {
  return (
    <article className='prose mx-auto'>
      <h1>{frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
    </article>
  );
}