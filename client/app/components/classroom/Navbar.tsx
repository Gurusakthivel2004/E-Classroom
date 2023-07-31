"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from 'react';
import axios from "axios";
import SearchIcon from '@mui/icons-material/Search';
import { useAppSelector, useAppDispatch } from "@/redux/hook"
import { setCurrent } from "@/redux/features/authSlice";
import { useRouter } from "next/navigation";
import { setDefault } from "@/redux/features/authSlice";

export default function Navbar() {

  const[name,setText] = useState("")
  const dispatch = useAppDispatch();
  const { push } = useRouter();
  const token = useAppSelector(state => state.token)

  // const handleClick = async () => {
  //   await axios.post('http://localhost:6001/getuserdata',{username: name},{
  //     headers : {'Authorization': `Bearer ${token}`}
  //   })
  //   .then(async (data) => {
  //     dispatch(setCurrent(name))
  //     setText("")
  //     push(`/${name}`);
  //   })
  //   .catch((error) => setText("User doesnot exist"))
  // }

  const handleLogout = () => {
    dispatch(setDefault())
  }

  let path = '';
  const state = useAppSelector(state => state.userpicture)
  path = `http://localhost:6001/${state}`

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
              {/* <div className="mr-3 flex flex-row justify-center items-center border-solid border-2 border-sky-900 rounded-full">
                <input type="text" onSubmit={handleClick} placeholder="Make Friends..." value={name}  onChange={(e) => setText(e.target.value)} className="ml-2 p-2 pl-5 mr-2 rounded-full focus:outline-none text-sky-900" />
                <SearchIcon className="ml-auto mr-2 hover:cursor-pointer" onClick={handleClick} />
              </div> */}
              <Link className='p-5 font-semibold hover:text-sky-200' href={"/classroom"}>Home</Link>
              <Link className='p-5 font-semibold hover:text-sky-200' href={"/group"}>Group</Link>
              <Link className='p-5 font-semibold hover:text-sky-200' href={"/notes"}>Notes</Link>
              {/* <Link className='p-5 font-semibold hover:text-sky-200' href={"/meet"}>Meet+</Link> */}
              <Link onClick={handleLogout} className='p-5 font-semibold hover:text-sky-200' href={"/"}>Logout</Link>
              <Link className='p-5 font-semibold hover:text-sky-200' href={"/account"}><img className="rounded-full w-auto" style={{height:'3rem',objectFit:'cover'}}  src={path} /></Link>
            </ul>
        </div>
    </nav>
    </section>
  )
}
