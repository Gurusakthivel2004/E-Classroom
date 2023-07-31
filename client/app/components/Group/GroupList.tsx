"use client"
import { useAppSelector } from "@/redux/hook";
import React, { useEffect, useState } from 'react';
import axios from "axios";
import DuoIcon from '@mui/icons-material/Duo';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import CreateRoom from "../classroom/CreateRoom";

export default  function GroupList() {

    const [userData, setUserData] = useState({});
    const [path, setPath] = useState('');
    const state = useAppSelector((state) => state);
    let name = state.username,token = state.token

    useEffect(() => {
        const fetchUserData = async () => {
        try {
            const response = await axios.post('http://localhost:6001/getuserdata', { username: name }, {
                headers : {'Authorization': `Bearer ${token}`}
            });
            const { data } = response;
            setUserData(data);
            setPath(`http://localhost:6001/${data.picturePath}`);
        } catch (error) {
            console.error(error);
        }
        };
        fetchUserData();
    }, [name]);

    return (
        <section className="flex flex-row h-full">

            {/* Groups */}
            <div className="bg-white text-sky-900 h-1/2 p-6 w-1/3 m-12 flex flex-col items-center justify-center">
                <div className='flex flex-row pt-4 px-2 justify-center items-center w-full'>
                    <img className='w-12 flex rounded-full' src={path} alt="friends"/>
                    <p className='text-center m-auto'>{name}</p>
                </div>
                <div className='flex flex-row pt-4 px-2 justify-center items-center w-full'>
                    <img className='w-12 flex rounded-full' src={path} alt="friends"/>
                    <p className='text-center m-auto'>{name}</p>
                </div>
                <div className='flex flex-row pt-4 px-2 justify-center items-center w-full'>
                    <img className='w-12 flex rounded-full' src={path} alt="friends"/>
                    <p className='text-center m-auto'>{name}</p>
                </div>
                <div className='flex flex-row pt-4 px-2 justify-center items-center w-full'>
                    <img className='w-12 flex rounded-full' src={path} alt="friends"/>
                    <p className='text-center m-auto'>{name}</p>
                </div>
                <div className='flex flex-row pt-4 px-2 justify-center items-center w-full'>
                    <img className='w-12 flex rounded-full' src={path} alt="friends"/>
                    <p className='text-center m-auto'>{name}</p>
                </div>
                <div className='flex flex-row pt-4 px-2 justify-center items-center w-full'>
                    <img className='w-12 flex rounded-full' src={path} alt="friends"/>
                    <p className='text-center m-auto'>{name}</p>
                </div>
            </div>
            {/* Chat Box */}
            <div className="flex flex-col bg-white h-auto w-2/3 m-12 p-6">

                <div className='flex flex-row p-2 justify-center border-solid border-b-2 border-sky-900 items-center w-full'>
                    <img className='w-12 mr-auto flex rounded-full' src={path} alt="friends"/>
                    <p className='text-center text-1xl text-sky-900 w-full font-semibold'>{name}</p>
                </div>

                <div className="flex flex-col h-96 p-6 text-center overflow-auto">
                    <div className="flex flex-row py-3">
                        <img className='w-12 flex rounded-full' src={path} alt="friends"/>
                        <div className="flex p-3 px-6 justify-center items-center ml-3 bg-sky-900 rounded-l-full rounded-r-full w-fit text-white">
                            <p>Hello Everyone</p>
                        </div>
                    </div>

                    <div className="flex flex-row py-3">
                        <img className='w-12 flex rounded-full' src={path} alt="friends"/>
                        <div className="flex p-3 px-6 justify-center items-center ml-3 bg-sky-900 rounded-l-full rounded-r-full w-fit text-white">
                            <p>Hello Everyone</p>
                        </div>
                    </div>

                    <div className="flex flex-row py-3">
                        <img className='w-12 flex rounded-full' src={path} alt="friends"/>
                        <div className="flex p-3 px-6 justify-center items-center ml-3 bg-sky-900 rounded-l-full rounded-r-full w-fit text-white">
                            <p>Hello Everyone</p>
                        </div>
                    </div>

                    <div className="flex flex-row py-3 ml-auto">
                        <div className="flex p-3 px-6 justify-center items-center ml-3 bg-green-700 rounded-l-full rounded-r-full w-fit text-white">
                            <p>Hello Everyone</p>
                        </div>
                    </div>

                    <div className="flex flex-row py-3 ml-auto">
                        <div className="flex p-3 px-6 justify-center items-center ml-3 bg-green-700 rounded-l-full rounded-r-full w-fit text-white">
                            <p>Hello Everyone</p>
                        </div>
                    </div>

                    <div className="flex flex-row py-3 ml-auto">
                        <div className="flex p-3 px-6 justify-center items-center ml-3 bg-green-700 rounded-l-full rounded-r-full w-fit text-white">
                            <p>Hello Everyone</p>
                        </div>
                    </div>

                    <div className="flex flex-row py-3 ml-auto">
                        <div className="flex p-3 px-6 justify-center items-center ml-3 bg-green-700 rounded-l-full rounded-r-full w-fit text-white">
                            <p>Hello Everyone</p>
                        </div>
                    </div>

                    <div className="flex flex-row py-3 ml-auto">
                        <div className="flex p-3 px-6 justify-center items-center ml-3 bg-green-700 rounded-l-full rounded-r-full w-fit text-white">
                            <p>Hello Everyone</p>
                        </div>
                    </div>

                    <div className="flex flex-row py-3 ml-auto">
                        <div className="flex p-3 px-6 justify-center items-center ml-3 bg-green-700 rounded-l-full rounded-r-full w-fit text-white">
                            <p>Hello Everyone</p>
                        </div>
                    </div>
                    

                </div>

                <div className='flex flex-row pt-6 p-2 justify-center items-center w-full'>
                    <div className="flex items-center justify-center p-4 mr-3 rounded-full bg-gray-200 w-auto ml-auto cursor-pointer ">
                        <DuoIcon />
                    </div>

                    <div className="flex items-center justify-center p-4 mr-3 rounded-full bg-gray-200 w-auto">
                        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-auto cursor-pointer">
                            <div className="flex flex-col items-center  justify-center">
                                <AttachFileIcon />    
                            </div>
                            <input id="dropzone-file" type="file" className="hidden" />
                        </label>
                    </div> 

                    <input className="p-3 w-1/2 border-solid border-2 border-sky-900" placeholder="Start texting..." type="text" />
                    <button className="mr-auto w-auto bg-sky-900 text-white text-center p-3 border-solid border-2 border-sky-900 hover:text-sky-900 hover:bg-sky-100 hover:border-sky-100">Submit</button>
                </div>
            </div>
            {/* Members */}
            <div className="bg-white text-sky-900 h-1/2 w-1/3 m-12 flex flex-col items-center justify-center justify-between">
                {/* <CreatePost /> */}
                <CreateRoom />
            </div>

        </section>
        
    )
}
