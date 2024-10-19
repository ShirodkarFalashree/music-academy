import React from 'react'
import { Spotlight } from './ui/Spotlight'
import Link from 'next/link'
import { Button } from "./ui/moving-border";

function HeroSection() {
  return (
    <div className='h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0'>
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className='p-4 relative z-10 w-full text-center'>
        <h1 className="mt-20 md:mt-40 text-4xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 ">
          Where Passion Meets Melody</h1>
        <p
          className="mt-10 font-normal text-base md:text-2xl text-neutral-300 max-w-2xl mx-auto md:leading-10"
        >At our Music Academy, we nurture the musician in everyone. Whether you're a beginner or an advanced learner, our dedicated instructors guide you through diverse programs, from classical to contemporary. Join us to explore the joy of music and let your talent shine!
        </p>

        <div>
          <Link href={"/courses"}>
            <Button
            className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800" borderRadius="1.75rem">
            Explore Courses</Button>
            </Link>
        </div>
      </div>

    </div>
  )
}

export default HeroSection