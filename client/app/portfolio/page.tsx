"use client"
import Link from "next/link"
import Image from "next/image"
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Page() {
  return (
    <div>

        {/* Navbar */}

        <section>
            <nav className="relative flex justify-between mx-auto bg-sky-900 text-white p-3">
                <Link href={"/"}className="px-4 relative flex items-center justify-between">
                    <h1 className='font-bold text-4xl'>Portfolio</h1>
                </Link>
                <div className="flex">
                    <ul className='flex items-center justify-between pr-12'>
                    <Link className='hidden p-5 font-semibold hover:text-sky-600 md:block' href={"#education"}>Education</Link>
                    <Link className='hidden p-5 font-semibold hover:text-sky-600 md:block' href={"#skills"}>Skills</Link>
                    <Link className='hidden p p-5 font-semibold hover:text-sky-600 md:block' href={"#projects"}>Projects</Link>
                    {/* <Link className='p-5 font-semibold hover:text-sky-600' href={"/signup"}>Sign In</Link> */}
                    </ul>
                </div>
            </nav>
        </section>

        {/* Hero Section */}

        <div className="bg-white pt-24 h-full pb-12"> 
            <section id="hero" className='bg-white text-sky-900'>
            <div className="container flex flex-col-reverse items-center px-6 py-6 mx-auto mt-1- space-y-0 md:space-y-0 md:flex-row">
                <div className="flex flex-col mb-32 space-y-12 md:w-2/3 items-center justify-end mt-auto mb-auto">
                    <h1 className="max-w-md text-4xl font-bold text-center mt-12 md:text-5xl md:mt-0 "><span className="text-8xl text-red-700">G</span>uru Sakthivel</h1>
                    <p className="max-w-sm text-center font-semibold">Iam a f</p>
                    <div className="flex flex-row p-2 items-center justify-between w-1/3">
                        <TwitterIcon className="flex" />
                        <FacebookIcon className="flex" />
                        <InstagramIcon className="flex" />
                        <LinkedInIcon className="flex" />
                    </div>
                </div>
                <div className='w-1/3 h-96 hidden justify-start md:flex'>
                <img src="/hero-image.png" alt="hero-image" />
                </div>
            </div>
        </section>
        </div>


        {/* Education */}
        <h1 className="bg-white font-bold text-4xl text-center w-full text-sky-900 pt-12  border-solid border-t-2 border-sky-900">EDUCATION</h1>
        <section id="education" className="flex flex-row w-full bg-white pt-12 ">
            <div className="flex py-12 flex-row mx-auto bg-white border-none text-sky-900 border-none items-center justify-center">
                <div className="hidden w-1/3 items-center md:flex">
                    <img src="/school.jpg" alt="" />
                </div>

                <div className="flex flex-col mb-32 space-y-12 md:w-2/3 items-center justify-start mt-auto mb-auto">
                    <h3 className="w-full text-2xl font-semibold text-center text-red-500 mt-12 md:text-2xl md:mt-0">Mahatma Montessori School</h3>
                    <p className="max-w-sm text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
            </div>
        </section>

        {/* Projects */}
        <h1 className="bg-white font-bold text-4xl text-center w-full text-sky-900 pt-12 border-solid border-t-2 border-sky-900">PROJECTS</h1>
        <section id="projects" className="flex flex-row py-12 text-sky-900 w-full bg-white">
            <div className="flex flex-col mx-48 w-full text-sky-900">
                <div className="flex flex-row p-0 pb-6 my-12 justify-center items-center w-full">
                    <div className="flex flex-col items-center w-1/3 pr-6 justify-center text-center">
                        <img className="w-1/2 h-1/2" src="/flipkart.jpeg" alt="flipkart" />
                        <h3 className="text-2xl font-semibold pt-12 pb-3">E-Commerce Website</h3>
                        <p className="py-2">Lorem Ipsum asdn auhdn adunasdn a sdnuasfn junaisnfinaf asfs asdas  kmk asd asd </p>
                    </div>
                    <div className="flex flex-col items-center w-1/3 pr-6 justify-center text-center">
                        <img className="w-1/2 h-1/2" src="/twitter.jpeg" alt="twitter" />
                        <h3 className="text-2xl font-semibold pt-12 pb-3">Twitter Clone</h3>
                        <p className="py-2">Lorem Ipsum asdn auhdn adunasdn a sdnuasfn junaisnfinaf asfs asdas  kmk asd asd </p>
                    </div>
                    <div className="flex flex-col items-center w-1/3 pr-6 justify-center text-center">
                        <img className="w-1/2 h-f" src="/myntra.jpeg" alt="myntra" />
                        <h3 className="text-2xl font-semibold pt-12 pb-3">Myntra Clone</h3>
                        <p className="py-2">Lorem Ipsum asdn auhdn adunasdn a sdnuasfn junaisnfinaf asfs asdas  kmk asd asd </p>
                    </div>
                </div>
            </div>
        </section>  

        {/* Skills */}
        <h1 className="bg-white font-bold text-4xl text-center pt-12 w-full text-sky-900 pt-6 border-solid border-t-2 border-sky-900">SKILLS</h1>
        <section id="skills" className="flex flex-row py-12 text-sky-900 w-full bg-white">
            <div className="flex flex-col mx-48 w-full">
                <div className="flex flex-row p-0 pb-6 h-full justify-center items-center w-full">
                    <div className="flex flex-col p-6 items-center w-1/6 justify-center text-center">
                        <img className="w-full" src="/next.jpeg" alt="" />
                    </div>
                    <div className="flex flex-col p-6 h-full items-center w-1/6 justify-center text-center">
                        <img className="w-full" src="/node.png" alt="" />
                    </div>
                    <div className="flex flex-col p-6 items-center w-1/6 justify-center text-center">
                        <img className="w-full" src="/tailwind.jpeg" alt="" />
                    </div>
                    <div className="flex flex-col p-6 items-center w-1/6 justify-center text-center">
                        <img className="w-full" src="/react.png" alt="" />
                    </div>
                    <div className="flex flex-col p-6 items-center w-1/6 justify-center text-center">
                        <img className="w-full" src="typescript.jpeg" alt="" />
                    </div>
                    <div className="flex flex-col p-6 items-center w-1/6 justify-center text-center">
                        <img className="w-full" src="/mongo.png" alt="" />
                    </div>  
                </div>
            </div>
        </section>  


        <section id="skills" className="flex pt-6 flex-col py-6 p-6 w-full bg-gray-300">
            <p className="mb-2 text-2xl ">Example</p>
            <div className="p-6 mb-4 flex flex-col  bg-white  w-full">
                <p className="width-auto mr-auto pb-2 text-3xl">My First Javascript</p>
                <button className="width-auto mr-auto bg-gray-200 p-1 border-solid border-2 border-sky-900 hover:p-2">CLick me to display Date and Time</button>
            </div>
            <a className="p-3 bg-green-600 w-fit text-white rounded-1/2 hover:bg-green-700 hover:cursor-pointer">Try it yourself</a>
        </section>  
   
    </div>
  )
}
