import React, {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ProjectsData } from './ProjectsData'
import leftArrow from '../public/leftArrow.png'
import rightArrow from '../public/rightArrow.png'


// hook, f°, globale de react,
// useEffect, exec f° + réaffiche compo , 

const ProjectSlider = ( {slides} ) => {
  // cont data in compo, 
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
        // Changer ordre colonne css order
        <div className={index === current ? 'inline' : 'hidden'} key={index}>
          <div className="mt-4 flex md:hidden h-screen flex-col">
            <div className="flex flex-col h-1/4 md:w-full justify-between bg-dark-cyan py-3 px-5">
              <div className="md:mx-96">
                <div className=" text-xl">J'ai bétonné</div>
                <div className="text-5xl font-semibold">
                  {project.url}<small className="font-light">.fr</small>
                </div>
              </div>
              <div className="flex flex-row justify-end">
                <div className="flex flex-row w-1/5 items-center justify-between">
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
            </div>
            <div className="flex flex-row h-3/4 bg-salmon p-3 py-5">
              <div className="flex w-1/2 h-full justify-center items-center">
                {index === current && (
                  <div className="w-11/12">
                    <Image
                      src={project.imageMobile}
                      alt=""
                      height="207"
                      width="119"
                      layout="responsive"
                      priority=""
                      className=""
                    />
                  </div>
                )}
              </div>
              <div className="flex flex-col w-1/2 items-start justify-end">
                {/* {index === current && ( */}
                  <h2 className="text-3xl">{project.title}</h2>
                {/* )} */}
                <p className="text-sm my-2">{project.tech}</p>
                <div className="text-right w-full">
                  <Link href={"/projects/" + project.url} className="">
                    <a className="text-xl">-> Détails</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 hidden md:flex h-screen flex-col">
            <div className="flex flex-row md:h-5/6 bg-salmon md:px-14">
              <div className="flex flex-col md:w-1/3 items-start justify-center">
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