import React, {useState, useRef} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Slider from "react-slick";
import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";
import leftArrow from '../public/leftArrow.png'
import rightArrow from '../public/rightArrow.png'

const ProjectsSlider = ( {projects} ) => {
  const [current, setCurrent] = useState(0)
  const length = projects.length

  
  const settings = {
    dots: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    arrows: false,
    beforeChange: function(currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function(currentSlide) {
      console.log("after change", currentSlide);
    }
  };
  
  const slider = useRef(null)
  
  const next = () => {
    slider.current.slickNext();
    setCurrent(current === length -1 ? 0 : current + 1)
  }

  const previous = () => {
    slider.current.slickPrev();
    setCurrent(current === 0 ? length - 1 : current - 1 )
  }

  if(!Array.isArray(projects) || projects.length <= 0) {
    return null
  }

  return (
    <>
    <div className="mt-4 flex h-screen flex-col">
      <div className="flex flex-row h-1/4 md:w-full md:order-last justify-between bg-dark-cyan p-5 px-5">
        <div className="flex flex-col w-2/3">
          <div className=" text-xl">J'ai bétonné</div>
          <Slider ref={slider} {...settings} className="w-96 h-16 h-full inline bg-tart">
          {projects.map(({slug, frontmatter},index) => (
            <div className="text-5xl font-semibold" key={index}>
              {slug}<small className="font-light">.fr</small>
            </div>
          ))}
          </Slider>
        </div>
          {projects.map(({slug, frontmatter},index) => {
        <div className="w-1/3 bg-salmon">
            <div className="hidden md:flex md:flex-row md:justify-end">
            <Link href={"/project/" + slug} className="" scroll={false}>
              <a>-> Détails</a>
            </Link>
            </div>
        </div>
          })}
        <div className="flex flex-row justify-end">
          <div className="flex md:hidden flex-row w-1/6 items-center justify-between">
              <div className="w-1/3">
                <Image
                  src={leftArrow}
                  alt=""
                  height="24"
                  width="24"
                  layout="responsive"
                  priority=""
                  className="cursor-pointer"
                  onClick={previous}
                />
              </div>
              <div className="w-1/3">
                <Image
                  src={rightArrow}
                  alt=""
                  height="24"
                  width="24"
                  layout="responsive"
                  priority=""
                  className="cursor-pointer"
                  onClick={next}
                />
              </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row h-3/4 bg-salmon p-3 py-5 md:p-10">
        {projects.map(({slug, frontmatter},index) => {
        <div className="flex w-1/2 md:w-2/3 md:h-full justify-center items-center md:order-last">
            <div className="w-11/12 md:hidden">
              <Image
                src={require('../public/' + frontmatter.imageMobile)}
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
                src={require('../public/' + frontmatter.image)}
                alt=""
                height="347"
                width="525"
                layout="responsive"
                className=""
              />
            </div>
        </div>
        })}
        <div className="flex flex-col w-1/2 items-start justify-end md:justify-center md:order-first">
          {projects.map(({slug, frontmatter},index) => {
            <>
              <h2 className="text-3xl">{frontmatter.title}</h2>
              <p className="text-sm my-2">{frontmatter.tech}</p>
            </>
          })}
          {projects.map(({slug, frontmatter},index) => {
          <div className="text-right w-full md:hidden">
            <Link href={"/project/" + slug} className="">
              <a className="text-xl">-> Détails</a>
            </Link>
          </div>
          })}
          <div className="hidden md:flex md:flex-row w-16 h-10 items-center justify-between">
              <div className="w-5/12">
                <Image
                  src={leftArrow}
                  alt=""
                  height="24"
                  width="24"
                  layout="responsive"
                  priority=""
                  className="cursor-pointer"
                  onClick={previous}
                />
              </div>
              <div className="w-5/12">
                <Image
                  src={rightArrow}
                  alt=""
                  height="24"
                  width="24"
                  layout="responsive"
                  priority=""
                  className="cursor-pointer"
                  onClick={next}
                />
              </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default ProjectsSlider