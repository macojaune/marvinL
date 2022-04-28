import React, {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ProjectsData } from './ProjectsData'
import leftArrow from '../public/leftArrow.png'
import rightArrow from '../public/rightArrow.png'



const ProjectSlider = ( {slides} ) => {
  const [current, setCurrent] = useState(0)
  const length = slides.length

  const nextSlide = () => {
    setCurrent(current === length -1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1 )
  }


  if(!Array.isArray(slides) || slides.length <= 0) {
    return null
  }

  return (
    <>
    {ProjectsData.map((project,index) => {
      return (
        <div className={index === current ? 'inline' : 'hidden'} key={index}>
          <div className="mt-4 flex h-screen flex-col">
            <div className="flex flex-row md:h-5/6 md: bg-salmon md:px-14">
              <div className="flex flex-col md:w-1/3 items-start justify-center">
                {/* VARIABLE ICI */}
                {/* {index === current && ( */}
                  <h2 className="md:text-4xl">{project.title}</h2>
                {/* )} */}
                <p className="md:my-4">{project.tech}</p>
                <div className="flex flex-row w-16 h-10 items-center justify-between">
                  <div className="w-5/12">
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
                  <div className="w-5/12">
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
              <div className="flex md:w-2/3 h-full justify-center items-center">
                {index === current && (
                  <div className="w-11/12">
                    <Image
                      src={project.image}
                      alt=""
                      height="347"
                      width="525"
                      layout="responsive"
                      priority=""
                      className=""
                    />
                  </div>)}
              </div>
            </div>
            <div className="flex flex-col md:h-1/6 md:w-full justify-between bg-dark-cyan md:py-3 md:px-5">
              <div className="md:mx-96">
                <div className=" text-xl">J'ai bétonné</div>
                <div className="text-5xl font-semibold">
                  {project.url}<small className="font-light">.fr</small>
                </div>
              </div>
              <div className="text-right md:mx-96">
                <Link href={project.details} className="">
                  <a>-> Détails</a>
                </Link>
              </div>
            </div>
        </div>
      </div>
      )
    })}
  </>
  )
}

export default ProjectSlider