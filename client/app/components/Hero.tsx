"use client"
import { useAppSelector } from "@/redux/hook"
import Link from "next/link"
export default function Hero() {
  const state = useAppSelector(state => state)
  return (
    <section id="hero" data-aos="fade-left"  className='bg-sky-900 my-24'>
        <div className="container flex flex-col-reverse items-center px-6 py-6 mx-auto mt-1- space-y-0 md:space-y-0 md:flex-row">
            <div className='w-1/2 h-96 hidden justify-center md:flex'>
            <img src="/hero-image3.png" alt="hero-image" />
            </div>  
        <div className="flex flex-col mb-32 space-y-12 md:w-1/2 items-center mt-auto mb-auto">
                <h1 className="max-w-md text-4xl text-white font-bold text-center mt-12 md:text-5xl md:mt-0 ">Bring Everyone together to build better projects</h1>
                <p className="max-w-sm text-white text-center text-darkGrayishBlue ">Classroom makes it simple for students to plan day-to-day tasks while keeping the larger team goals in view</p>
                <div className="flex justify-center items-center md:justify-start">
                    <Link className="p-3 px-6 pt-2 text-bold text-sky-900 bg-white baseline hover:bg-sky-700 hover:text-white" href={state.token !== "" ? "/classroom" : "/signup"}>Get Started</Link>
                </div>
            </div>
            <div className='w-1/2 h-96 hidden justify-center md:flex'>
            <img src="/hero-image2.png" alt="hero-image" />
            </div>
        </div>
    </section>
  )
}
