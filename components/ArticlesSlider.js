import React, {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import matter from 'gray-matter';
import leftArrow from '../public/leftArrow.png'
import rightArrow from '../public/rightArrow.png'



const ArticlesSlider = ({ posts }) => {
	
	const length = posts.length - 1;
	const [end, setEnd] = useState(2);

	const nextSlide = () => {
		setEnd(length > end + 3 ? end + 3	: length === end + 3 ? length : length === end + 2 ? length : length === end + 1 ? length : 2)
	}

	const prevSlide = () => {
		setEnd(end - 2 > 0 ? end - 2	: length)
	}

	return (
		<div className="flex md:flex-col md:h-screen max-h-screen justify-center">
			<div className="text-6xl font-bold">Articles</div>
			<div className="flex justify-between h-fit items-center px-20">
				<div className="w-7">
					<Image
						src={leftArrow}
						alt=""
						height="24"
						width="24"
						layout="responsive"
						priority=""
						className="cursor-pointer"
						onClick={prevSlide}
					/>
				</div>
				<div className="grid grid-cols-3 gap-x-2 overflow-hidden h-80 w-full justify-around p-5">
					{posts.map(({slug, frontmatter}, index) => (
						<div key={slug} className={index <= end && index >= end - 2? 'block' : 'hidden'}>
							<Link href={`/post/${slug}`}>
								<a className="">
									<div className="flex flex-col h-1/2">
										<div className="">
											<Image 
												src={frontmatter.socialImage}
												layout="responsive"
												width='997'
												height='400'
												className=""
											/>
										</div>
										<div className="h-3/4 p-3">
											<h2 className="text-2xl font-bold">{frontmatter.title}</h2>
											<p className="font-light">{frontmatter.metaDesc}</p>
										</div>
									</div>
								</a>
							</Link>
						</div>
					))}
				</div>
				<div className="w-7">
					<Image
						src={rightArrow}
						alt=""
						height="24"
						width="24"
						layout="responsive"
						priority=""
						className="cursor-pointer"
						onClick={nextSlide}
					/>
				</div>
			</div>
		</div>
	)
}

export default ArticlesSlider
