"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from 'react';
import axios from "axios";
import SearchIcon from '@mui/icons-material/Search';
import { useAppSelector, useAppDispatch } from "@/redux/hook"
import { setCurrent } from "@/redux/features/authSlice";
import { useRouter } from "next/navigation";

export default function Navbar() {

  const[name,setText] = useState("")
  const dispatch = useAppDispatch();
  const { push } = useRouter();
  const token = useAppSelector(state => state.token)

  const handleClick = async () => {
    await axios.post('http://localhost:6001/getuserdata',{username: name},{
      headers : {'Authorization': `Bearer ${token}`}
    })
    .then(data => {
        if(data.data === null){
            setText("User doesnot exist")
        } else {
            dispatch(setCurrent(name))
            setText("")
            push(`/${name}`);
        }
    })
    .catch((error) => setText("User doesnot exist"))
  }

  let path = '';
  const imgpath = useAppSelector(state => state.userpicture)
  path = `http://localhost:6001/${imgpath}`

   return (
    <section>
    <nav className="relative flex justify-between mx-auto bg-white">
        <Link href={"/"} className="px-4 relative flex items-center justify-between">
            <Image
            src="/5920.jpg"
            width={100}
            height={100}
            alt="Logo"
            />
            <h1 className='font-bold text-sky-900'>CLASSROOM</h1>
        </Link>
        <div className="flex">
            <ul className='hidden flex items-center justify-between pr-12 text-sky-900 md:flex'>
              <Link className='p-5 font-semibold hover:text-sky-200' href={"/classroom"}>Home</Link>
              <Link className='p-5 font-semibold hover:text-sky-200' href={"/group"}>Group+</Link>
              <Link className='p-5 font-semibold hover:text-sky-200' href={"/rooms"}>Room+</Link>
              <Link className='p-5 font-semibold hover:text-sky-200' href={"/meet"}>Meet+</Link>
              <Link className='p-5 font-semibold hover:text-sky-200' href={"/"}>Logout</Link>
              <Link className='p-5 font-semibold hover:text-sky-200' href={"/account"}><img className="rounded-full w-auto h-12" src={path} /></Link>
            </ul>
        </div>
    </nav>
    </section>
  )
}
