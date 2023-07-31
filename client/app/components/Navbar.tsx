"use client"
import Image from "next/image"
import Link from "next/link"
import { useAppSelector } from "@/redux/hook"
export default function Navbar() {

  const state = useAppSelector(state => state)

  return (
    <section>
    <nav className="relative flex justify-between mx-auto bg-white">
      <Link href={"/"}className="px-4 relative flex items-center justify-between">
            <Image
            src="/5920.jpg"
            width={100}
            height={100}
            alt="Logo"
            />
            <h1 className='font-bold text-sky-900'>CLASSROOM</h1>
        </Link>
        <div className="flex">
            <ul className='flex items-center justify-between pr-12 text-sky-900'>
              <Link className='hidden p-5 font-semibold hover:text-sky-600 md:block' href={state.token !== "" ? "/classroom" : "/signup"}>Get started</Link>
              <Link className='hidden p-5 font-semibold hover:text-sky-600 md:block' href={"#features"}>Features</Link>
              <Link className='hidden p p-5 font-semibold hover:text-sky-600 md:block' href={"#testimonials"}>Testimonials</Link>
              <Link className='p-5 font-semibold hover:text-sky-600' href={"/signup"}>Sign In</Link>
            </ul>
        </div>
    </nav>
    </section>
  )
}
