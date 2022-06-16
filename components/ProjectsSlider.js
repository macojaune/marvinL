import React, {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ProjectsData } from './ProjectsData'
import leftArrow from '../public/leftArrow.png'
import rightArrow from '../public/rightArrow.png'

const ProjectsSlider = ( {projects} ) => {
  const [current, setCurrent] = useState(0)
  const length = projects.length

  const nextSlide = () => {
    setCurrent(current === length -1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1 )
  }

  if(!Array.isArray(projects) || projects.length <= 0) {
    return null
  }

  return (
    <>
    {projects.map(({slug, frontmatter},index) => {
      return (
        <div key={slug} className={index === current ? 'inline' : 'hidden'}>
          <div className="mt-4 flex h-screen flex-col">
            <div className="flex flex-col h-1/4 md:w-full md:order-last justify-between bg-dark-cyan p-5 px-5">
              <div className="md:mx-96">
                <div className=" text-xl">J'ai bétonné</div>
                <div className="text-5xl font-semibold">
                  {slug}<small className="font-light">.fr</small>
                </div>
                <div className="hidden md:flex md:flex-row md:justify-end">
                  <Link href={"/project/" + slug} className="" scroll={false}>
                    <a>-> Détails</a>
                  </Link>
                </div>
              </div>
              <div className="flex flex-row justify-end">
                <div className="flex md:hidden flex-row w-1/6 items-center justify-between">
                  {index === current && (
                    <div className="w-1/3">
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
                  )}
                  {index === current && (
                    <div className="w-1/3">
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
                  )}
                </div>
              </div>
            </div>
            <div className="flex flex-row h-3/4 bg-salmon p-3 py-5 md:p-10">
              <div className="flex w-1/2 md:w-2/3 md:h-full justify-center items-center md:order-last">
                {index === current && (
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
                )}
                {index === current && (
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
                )}
              </div>
              <div className="flex flex-col w-1/2 items-start justify-end md:justify-center md:order-first">
                <h2 className="text-3xl">{frontmatter.title}</h2>
                <p className="text-sm my-2">{frontmatter.tech}</p>
                <div className="text-right w-full md:hidden">
                  <Link href={"/project/" + slug} className="">
                    <a className="text-xl">-> Détails</a>
                  </Link>
                </div>
                <div className="hidden md:flex md:flex-row w-16 h-10 items-center justify-between">
                  {index === current && (
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
                  )}
                  {index === current && (
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
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    })}
  </>
  )
}

export default ProjectsSlider