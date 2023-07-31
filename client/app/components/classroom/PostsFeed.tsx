"use client"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CommentIcon from '@mui/icons-material/Comment';
import { useAppSelector, useAppDispatch } from "@/redux/hook";
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import FavoriteIcon from '@mui/icons-material/Favorite';
import axios from 'axios';
import { useState, useEffect } from 'react'
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';

export default function PostsFeed(props : any) {

    const state : any = useAppSelector((state) => state), name: any = state.username
    // const [show,toggle] = useState(false)
    // const [comment,setcomment] = useState("")

    return (
        
        <div className="flex flex-col w-full px-3 w-80">
          <div className="flex flex-col bg-white h-auto w-full mx-auto m-12 pt-0 hover:cursor-pointer">

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

            <div className="flex flex-col h-[550px] p-6 pt-2 text-center overflow-auto scroll-container">
                
                {
                    props.posts.map((post : any) => (
                        <div className='p-2 border-solid border-b-2 w-full borderd-sky-900 w-full md:w-0.9'>
                            <div className='flex flex-row p-2 w-full rounded-full'>
                                <img className='w-12 rounded-full' style={{height:'3rem',objectFit:'cover'}}  src={`http://localhost:6001/${post.userPicture}`} alt="friends"/>
                                <p className='ml-6 font-semibold flex items-center justify-center'>{post.username}</p>
                                {post.username === state.username ? 
                                    <></> 
                                    :
                                    props.userdata.includes(post.username) ?
                                        <div onClick={() => props.removeFriend(post)} className='ml-auto mt-auto mb-auto flex items-center justify-center text-sky-900 cursor-pointer hover:text-sky-400'>
                                            <PersonRemoveIcon  className='ml-auto mt-auto mb-auto flex items-center justify-center' />
                                        </div>
                                    : 
                                        <div onClick={() => props.addFriend(post)} className='ml-auto mt-auto mb-auto flex items-center justify-center text-sky-900 cursor-pointer hover:text-sky-400'>
                                            <PersonAddIcon  className='ml-auto mt-auto mb-auto flex items-center justify-center' />
                                        </div>
                                }
                                </div>
                            <img className='w-full' src={`http://localhost:6001/${post.picturePath}`} alt="" />
                            <p className='py-2 text-semibold'>{post.caption}</p>
                            <div className='p-2 flex flex-row text-red-600'>
                                <div>
                                    {post.likes.includes(name) ? 
                                    <div onClick={() => {props.dislikes(post)}} className="flex hover:text-red-500">
                                        <FavoriteIcon className='w-auto'/> 
                                    </div> :
                                    <div onClick={() => {props.likes(post)}} className="flex hover:text-red-500">
                                        <FavoriteBorderIcon className='w-auto' />
                                    </div>
                                    }
                                </div>
                                <p className='pl-2 text-sky-900'>{post.likes.length}</p>
                                <div onClick={() => {
                                    props.handleiconClick(post)
                                }} className='ml-auto'>
                                    <CommentIcon className='w-auto text-sky-900 hover:text-sky-300' />
                                </div>
                                <p className='pl-2 text-sky-900'>{post.comments.length}</p>
                            </div>
                            {
                                props.show ? (
                                    <div  className="flex flex-col pt-2 p-3">
                                        <div className="flex flex-row shadow-xl my-4 rounded-md">
                                            <form onSubmit={(e) => {
                                                e.preventDefault()
                                                props.handleCommentSubmit(post,props.comment)
                                                props.setcomment("")
                                                }} className='flex flex-row w-full'>
                                                <input value={props.comment} onChange={e => props.setcomment(e.target.value)}  className='p-2 rounded-md w-full focus:border-none ' placeholder='Comment something' />
                                                <button type='submit' className="p-3 ml-auto rounded-r-lg px-6 pt-2 text-bold text-white bg-sky-900 baseline">send</button>
                                            </form>
                                        </div>
                                        {
                                            post.comments.map((comment : any) => (
                                                <div className="flex flex-row p-2 pt-6 items-start  border-solid border-b-2 border-slate-200 ">
                                                    <img className='w-12 rounded-full' style={{height:'3rem',objectFit:'cover'}}  src={`http://localhost:6001/${comment.picturePath}`} alt="friends"/>
                                                    <div className="flex flex-col text-start pl-2">
                                                        <p className='pl-6 font-md text-sky-900'>{comment.username}</p>
                                                        <p className='pl-6 font-display py-2 text-start text-slate-700'>{comment.comment}</p>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                        
                                    </div>
                                ) : <></>
                            }
                        </div>
                    ))
                }
            </div>
          </div>
        </div>

    )
}