"use client"
import CreateGroup from "./CreateGroup"
import axios from "axios";
import { useAppSelector } from "@/redux/hook";

export default async function FriendsCarousal() {

    const state = useAppSelector(state => state),arr = [1,1,1,1]
    const name = state.username,token = state.token;
    let username = '',userData,path = '';
    await axios.post('http://localhost:6001/getuserdata',{username: name},{
        headers : {'Authorization': `Bearer ${token}`}
    })
    .then(async (data) => {
        userData = data.data
        path = `http://localhost:6001/${userData.picturePath}`
        username = userData.username
    })
    .catch((error : Error) => {})

    return (
        <div className="px-12 flex hidden w-4/5  mx-auto md:flex cursor-pointer overflow-auto scroll-container">
            <div className="ml-6 bg-white text-sky-900 w-auto p-4 flex flex-row items-center ">
               {
                arr.map(user => {
                    return (
                        <div className="flex flex-col w-[220px] pr-12 mx-6 items-center h-auto mx-2 p-3">
                            <img className="rounded-full w-full" src={path} alt="friend1" />
                            <p className="text-1xl my-2">{name}</p>
                            <button className="mt-2 mx-auto bg-sky-900 text-white text-center rounded-s-md p-3 w-full hover:bg-sky-500" style={{borderRadius:"5%"}}>Follow</button>
                        </div>
                    )
                })
               }
            </div>
        </div>
        
    )
}
