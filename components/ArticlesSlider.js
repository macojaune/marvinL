import React, {useRef, useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import leftArrowColored from '../public/leftArrowColored.png'
import rightArrowColored from '../public/rightArrowColored.png'
import Slider from "react-slick";
import "../node_modules/slick-carousel/slick/slick.css"; 
import "../node_modules/slick-carousel/slick/slick-theme.css";

const ArticlesSlider = ({posts}) => {
	const [hover, setHover] = useState(false)
	const settings = {
		dots: false,
		arrows: false,
		infinite: false,
		speed: 500,
		slidesToShow: 4.5,
		slidesToScroll: 4,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2.5,
					slidesToScroll: 2,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				}
			},
			{
				breakpoint: 425,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
			}
		]
	};

	const slider = useRef(null)

	const next = () => {
		slider.current.slickNext();
	}

	const previous = () => {
		slider.current.slickPrev();
	}

	return (
		<div className="flex flex-row mt-5 px-3">
			<div className="w-6 flex flex-col justify-end gap-y-2">
				<div>
					<Image
						src={leftArrowColored}
						alt=""
						height="24"
						width="24"
						layout="responsive"
						className="cursor-pointer"
						onClick={previous}
					/>
				</div>
				<div>
					<Image
						src={rightArrowColored}
						alt=""
						height="24"
						width="24"
						layout="responsive"
						className="cursor-pointer"
						onClick={next}
					/>
				</div>
			</div>
			<Slider ref={slider} {...settings} className="w-11/12 grow px-2">
			{posts.map(({slug, frontmatter}, index) =>
					(
						<Link key={slug} href={`/post/${slug}`}>
							<a onMouseEnter={() => setHover(index)}
								onMouseLeave={() => setHover(false)}
								className={`flex relative rounded-xl overflow-hidden h-32`}>
								<div className={` ${hover === index ? 
									"w-full bg-light-charcoal" : "w-56 bg-charcoal"} z-10 p-3 transition-all duration-700`}>
									<h2 className="text-xl font-medium">{frontmatter.title}</h2>
								</div>
								<div
									className={`${hover === index ? "" : "w-24"} transition-all duration-200 z-1`}
								>
									<Image
										src={require('../public' + frontmatter.image)}
										layout='fill'
										objectFit="cover"
										alt=""
									/>
								</div>
							</a>
						</Link>
					)
				)}
			</Slider>
		</div>
	);
}

export default ArticlesSlider;