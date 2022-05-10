import React, {useRef} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import leftArrowColored from '../public/leftArrowColored.png'
import rightArrowColored from '../public/rightArrowColored.png'


import Slider from "react-slick";
import "../node_modules/slick-carousel/slick/slick.css"; 
import "../node_modules/slick-carousel/slick/slick-theme.css";

const ArticlesSlider = ({posts}) => {
    const settings = {
      dots: false,
      arrows: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4.5,
      slidesToScroll: 4,
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
				<Image
					src={leftArrowColored}
					alt=""
					height="24"
					width="24"
					layout="responsive"
					priority=""
					className="cursor-pointer"
					onClick={previous}
				/>
				<Image
					src={rightArrowColored}
					alt=""
					height="24"
					width="24"
					layout="responsive"
					priority=""
					className="cursor-pointer"
					onClick={next}
				/>
			</div>
			<Slider ref={slider} {...settings} className="w-11/12 grow px-2">
				{posts.map(({slug, frontmatter}, index) => (
					<Link href={`/post/${slug}`}>
						{/* h-36 144px, h-32 128px, maquette 130px */}
						<a className="rounded-xl overflow-hidden h-32 flex flex-row bg-charcoal">
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
						</a>
					</Link>
				))}
			</Slider>
		</div>
	);
}

export default ArticlesSlider;