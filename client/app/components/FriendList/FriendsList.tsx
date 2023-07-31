"use client"

import { useAppSelector } from "@/redux/hook";
import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';

export default function FriendsList(props : any) {

    const state = useAppSelector(state => state),username = state.username,token = state.token
    const {push} = useRouter()
    console.log(props.friendsData);
    
    return (
        <div className="bg-white p-3 h-full w-full relative flex flex-col items-center justify-center justify-between sm:justify-center hover:cursor-pointer">
            <div className='flex items-center px-6 py-1 justify-center flex-col text-sky-900 bg-white w-80'>
                <p className='text-center font-semibold text-red-500 pt-2'>Friends</p> 
                <hr className="py-2 black-500" />
                
                <style>
                    {`
                    .scroll-container::-webkit-scrollbar {
                        display: none;
                    }

                    .scroll-container {
                        -ms-overflow-style: none;
                        scrollbar-width: none;
                    }
                    `}
                </style>

                <div className="flex flex-col h-48 overflow-auto w-full scroll-container">
                    {
                        props.friendsData.length > 0 ? props.friendsData.map((friend : any) => (
                            <div onClick={() => push(`/${friend.username}`)} className='flex flex-row pt-2 px-2 justify-center items-center w-full'>
                                <img className='w-12 flex rounded-full' style={{height:'3rem',objectFit:'cover'}}  src={`http://localhost:6001/${friend.picturePath}`} alt="friends"/>
                                <p className='text-center pl-6 w-full ml-auto'>{friend.username}</p>
                            </div>
                        )) : <p className="mt-auto mb-auto text-center w-full ">No friends</p>
                    }

                </div>
                
            </div>
        </div>
    )
}