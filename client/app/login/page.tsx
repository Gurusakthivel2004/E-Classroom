"use client"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useAppSelector, useAppDispatch } from "@/redux/hook"
import { setUsername, setUserPicture, setToken, setPosts, setFriends, setNotes } from "@/redux/features/authSlice"

export default function page() {

  const { push } = useRouter();
  const [username,setname] = useState("");
  const[password,setpassword] = useState("");
  const [error,setError] = useState("");
  const dispatch = useAppDispatch();
  const state : any = useAppSelector((state) => state)
  const token = state.token

  const handleSubmit = async () => {
    if(password !== "" && username !== ""){
      const data = {
        username: username,
        password: password
      }
      await axios.post("http://localhost:6001/login", data)
      .then(response => {
        console.log(response)
        axios.post('http://localhost:6001/getposts',{id: "1"},{
            headers: {'Authorization': `Bearer ${token}`}
        })
        .then(data => {
            dispatch(setPosts(data.data))
        })
        .catch((error : Error) => console.log(error))
        axios.get('http://localhost:6001/getfriendsdata', {
          headers : {'Authorization': `Bearer ${state.token}`, 'username': `${username}`}
        })
        .then(data => {
          dispatch(setFriends(data.data))
        })
        .catch((error : Error) => console.log(error))
        axios.get('http://localhost:6001/getNotes', {
          headers : {'Authorization': `Bearer ${state.token}`, 'username': `${username}`}
        })
        .then(data => {
          dispatch(setNotes(data.data))
        })
        .catch((error : Error) => console.log(error))
        dispatch(setUsername(username));
        dispatch(setUserPicture(response.data.user.picturePath));
        dispatch(setToken(response.data.token))
        push('/classroom')
      })
      .catch(error => {
        setError(error.response.data.msg);
      });
    } else {
      setError("Username or password must not be empty");
    } 
  }

  return (
    <div data-aos="fade-left" className="flex h-screen justify-center items-center bg-sky-900"> 
        <div className="bg-white p-12 relative flex flex-col items-center justify-between">
            <div className="flex items-center justify-between">
                <Image
                src="/5920.jpg"
                width={100}
                height={100}
                alt="Logo"
                />
                <h1 className='font-bold text-sky-900'>CLASSROOM</h1>
            </div>
            <div className="flex flex-col">
                <label className="text-left font-semibold my-3">Username</label>
                <input value={username} onChange={(e) => setname(e.target.value)} className="p-2 border-solid border-2 border-sky-900 w-96" type="text"/>
                <label className="text-left font-semibold my-3">Password</label>
                <input value={password} onChange={(e) => setpassword(e.target.value)}  className="p-2 border-solid border-2 border-sky-900 w-96" type="password"/>
                <p className="mx-auto text-red-900 pt-2">{error}</p>
                <button onClick={handleSubmit} className="p-3 px-6 pt-2 mt-6 text-bold text-white bg-sky-900 baseline hover:bg-sky-700 hover:text-white">Login</button>
                <Link className="mt-6 text-center hover:text-sky-900" href={"/signup"}><p>Click here to Register</p></Link>
            </div>
        </div>
    </div>
  )
}
