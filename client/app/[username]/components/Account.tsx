"use client"
import React, { useEffect } from 'react'
import axios from 'axios';
import { Suspense } from "react"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ForumIcon from '@mui/icons-material/Forum';
import { useAppSelector } from '@/redux/hook';
import FriendsList from '@/app/components/FriendList/FriendsList';

export default async function Account(user : any) {

    let username = '',userData,path = '';
    const token = useAppSelector(state => state.token)
    await axios.post('http://localhost:6001/getuserdata',{username: user.name},{
        headers : {'Authorization': `Bearer ${token}`}
    })
    .then(data => {
        userData = data.data
        path = `http://localhost:6001/${userData.picturePath}`
        username = userData.username
    })
    .catch((error : Error) => {})
    return (
        <Suspense fallback={<h3 className="text-center mt-auto mb-auto text-white">Loading please wait...</h3>}>
            <section data-aos="fadr-left" className="flex p-6 w-full mb-12">
                <div className="bg-white p-6 h-full w-auto relative flex flex-col items-center justify-between sm:justify-center">
                    <div className='flex items-center justify-center flex-col text-sky-900 bg-white w-80'>
                        <img className='flex pt-2 w-48 rounded-full' src={path} />
                        <p className='py-2 text-2xl font-semibold text-sky-900'>{username}</p>
                        <div className="w-full h-2 border-solid border-b-2 border-sky-900"></div>
                        <div className='flex flex-row justify-between w-full'>
                            <div className='flex flex-col pt-2 pl-2 '>
                                <p className='text-red-500 py-2 text-start'>College: </p>
                                <p className='text-red-500 py-2 text-start'>Department: </p>
                                <p className='text-red-500 py-2 text-start'>City: </p>
                            </div>
                            <div className='flex flex-col pt-2 pl-2 pr-2'>
                                <p className='text-sky-900 w-full py-2 '>Sri Eshwar College</p>
                                <p className='text-sky-900 w-full py-2'>ECE</p>
                                <p className='text-sky-900 w-full py-2 '>Neyveli</p>
                            </div>
                        </div>
                        <FriendsList />
                    </div>
                </div>

                <div className="hidden bg-white ml-6 h-auto w-full relative flex-col items-center md:flex">
                    <h1 className='text-semibold font-4xl text-sky-900 p-2 text-left'>Posts</h1>
                    <div className='flex items-center justify-center flex-col w-auto text-sky-900 p-3 '>

                        <div className='p-2 border-solid b-2 w-full border-sky-900 w-full md:w-0.9'>
                            <img className='w-full' src="/post.jpeg" alt="" />
                            <div className='p-2 flex flex-row'>
                                <FavoriteBorderIcon className='w-auto' />
                                <p className='pl-2'>732</p>
                                <CommentIcon className='ml-auto w-auto' />
                                <p className='pl-2'>732</p>
                            </div>
                        </div>

                        <div className='p-2 border-solid b-2 border-sky-900 w-full md:w-0.9'>
                            <img className='w-full' src="/post2.jpeg" alt="" />
                            <div className='p-2 flex flex-row'>
                                <FavoriteBorderIcon className='w-auto' />
                                <p className='pl-2'>732</p>
                                <CommentIcon className='ml-auto w-auto' />
                                <p className='pl-2'>732</p>
                            </div>
                        </div>

                        <div className='p-2 border-solid b-2 border-sky-900 w-full md:w-0.9'>
                            <img className='w-full' src="/post3.jpeg" alt="" />
                            <div className='p-2 flex flex-row'>
                                <FavoriteBorderIcon className='w-auto' />
                                <p className='pl-2'>732</p>
                                <CommentIcon className='ml-auto w-auto' />
                                <p className='pl-2'>732</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="hidden bg-white ml-6 w-full relative flex-col items-center  md:flex">
                        
                        <h1 className='text-semibold font-4xl text-sky-900 p-2 text-left'>Groups</h1>
                        <div className='flex items-center justify-center flex-col w-auto text-sky-900 p-3 '>

                            <div className='p-2 border-solid b-2 border-sky-900 w-full'>
                                <img className='w-full' src="/post3.jpeg" alt="" />
                                <div className='p-2 flex flex-row'>
                                    <ForumIcon className='w-auto' />
                                    <p className='pl-2'>Networking</p>
                                    <PeopleAltIcon className='ml-auto w-auto' />
                                    <p className='pl-2'>41</p>
                                </div>
                            </div>
                            <div className='p-2 border-solid b-2 border-sky-900 w-full'>
                                <img className='w-full' src="/cr7.jpeg" alt="" />
                                <div className='p-2 flex flex-row'>
                                    <ForumIcon className='w-auto' />
                                    <p className='pl-2'>Javascript</p>
                                    <PeopleAltIcon className='ml-auto w-auto' />
                                    <p className='pl-2'>23</p>
                                </div>
                            </div>
                            <div className='p-2 border-solid b-2 border-sky-900 w-full'>
                                <img className='w-full' src="/messi.jpg" alt="" />
                                <div className='p-2 flex flex-row'>
                                    <ForumIcon className='w-auto' />
                                    <p className='pl-2'>Development</p>
                                    <PeopleAltIcon className='ml-auto w-auto' />
                                    <p className='pl-2'>73</p>
                                </div>
                            </div>
                        </div>
                </div>

                
            
            </section>
        </Suspense>
    )
}
