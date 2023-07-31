"use client"

import AddIcon from '@mui/icons-material/Add';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useAppSelector } from '@/redux/hook';
import { useState } from "react"
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function JoinCLass() {

    const [popup,toggle] = useState(false);
    const [name,setName] = useState("");
    const [error,setErrormsg] = useState("")
    const state = useAppSelector(state => state)
    const token = state.token
    const [pictures, setPictures] = useState<File[]>([])
    
    
    const handleClick = () => toggle((prev) => !prev)
    const handleSubmit = async () => {
        try {
            const data = {
                name : state.username,
                group_name: name 
            }
            await axios.post('http://localhost:6001/joingroup',data,{
                headers : {
                    'Authorization': `Bearer ${token}`
                }
            })
            .then(data => { console.log(data);toast(data.data)})
            .catch(error => toast('An error occured', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                type: 'error'
                }))

        } catch (error) {
            toast('An error occured', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                type:'error',
                });
        }
    }

    return (
        <div className="flex mb-6 h-[250px] w-full">
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                />
            <ToastContainer />
            <div  className="bg-white h-max p-6 w-full relative flex flex-col items-center justify-between ">
                <div className="flex flex-col w-full">
                    <div className="flex items-center justify-between flex-row pb-2">
                    <h3 hidden={popup} className="text-center">Join Group</h3>
                    <AddIcon style={{display: popup === false ? 'block' : 'none'}} onClick={handleClick} className="mr-2 rounded-full cursor-pointer hover:bg-sky-100" />
                    </div>
                    <div className="flex items-center flex-row pb-2">
                    <ArrowBackIcon style={{display: popup === true ? 'block' : 'none'}} onClick={handleClick} className="rounded-full cursor-pointer hover:bg-sky-100" /> 
                    <h3 hidden={!popup} className="mx-auto">Join Group</h3>
                    </div>
                    <hr className="py-2 black-500" />
                    <p hidden={popup} className="w-72 text-1xl" >It allows you to become part of a vibrant community with shared interests. Joining group provides an opportunity to connect with like-minded individuals.</p>
                    <label hidden={!popup}>Group</label>
                    <input hidden={!popup} value={name} onChange={(e) => setName(e.target.value)} className="p-2  border-solid border-2 border-sky-900" id="groupname" type="text" />
                    <p hidden={!popup} className="py-2 text-red-800 text-center">{error}</p>
                    <button hidden={!popup} onClick={handleSubmit} className="mt-2 mx-auto bg-sky-900 text-white text-center p-3 w-full hover:bg-sky-500">Join Group</button>
                </div>
            </div>
        </div>
    )
}
