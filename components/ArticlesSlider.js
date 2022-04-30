// import fs from 'fs';
import matter from 'gray-matter';
import Image from 'next/image';
import Link from 'next/link';

export async function getStaticProps() {
    const files = fs.readdirSync('../blog/posts')

    const posts = files.map((fileName) => {
        const slug = fileName.replace('.md', '')
        const readFile = fs.readFileSync(`../blog/posts/${fileName}`, 'utf-8')
        const { data: frontmatter } = matter(readFile)

        return {
            slug,
            frontmatter,
        }
    })

    return {
        props: {
            posts,
        }
    }
}

const ArticlesSlider = ({ posts }) => {
    
    return(
			<div className="flex md:flex-col md:h-screen p-20">
				<div className="text-5xl">Articles</div>
				<div className="flex md:flex-row h-full p-5 justify-center items-center bg-salmon">
					{posts.map(({slug, frontmatter}) => (
						<Link href={`../blog/posts/${slug}`}>
							<a>
								<div className="flex md:flex-col md:h-1/2 md:w-1/3 bg-tart">
									<div className="">
										<Image 
											height='360'
											width='1366'
											src={frontmatter.socialImage}
										/>
									</div>
									<div>
										<h2>{frontmatter.title}</h2>
										<p>{frontmatter.metaDesc}</p>
									</div>
								</div>
							</a>
						</Link>
					))}
				</div>
			</div>
    )    
}

export default ArticlesSlider