"use client"

import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useRouter } from "next/navigation";
import axios from "axios";
import { useAppSelector } from "@/redux/hook";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function CreateGroup() {
  const [popup,toggle] = useState(false);
  const [name,setName] = useState("");
  const [description,setDescription] = useState("");
  const [error,setErrormsg] = useState("")
  const { push } = useRouter();
  const state = useAppSelector(state => state)
  const token = state.token

  const handleClick = () => {
      toggle((prev) => !prev)
  }

  const handleSubmit = async () => {
      const data = {
        username: state.username,
        group_name: name,
        group_description: description
      }
      try {
        await axios.post('http://localhost:6001/createGroup', data, {
          headers : {
            'Authorization': `Bearer ${token}`
          }
        });
        toast('Successfully created')
      } catch (error: any) {
        setErrormsg(error.response?.data.msg || 'An error occurred.');
      }
  }

  return (
    <div className="flex mb-6 w-full">
      <div className="bg-white pt-6 pl-6 pr-6 pb-10 w-full relative flex flex-col items-center">
        <div className="flex flex-col pt-3 w-full">
            <div className="flex items-center justify-between flex-row pb-2">
              <h3 hidden={popup} className="text-center">Create Group</h3>
              <AddIcon style={{display: popup === false ? 'block' : 'none'}} onClick={handleClick} className="mr-2 rounded-full cursor-pointer hover:bg-sky-100" />
            </div>
            <div className="flex items-center justify-between flex-row pb-2">
              <ArrowBackIcon style={{display: popup === true ? 'block' : 'none'}} onClick={handleClick} className="rounded-full cursor-pointer hover:bg-sky-100" /> 
              <h3 hidden={!popup} className="mx-auto">Create Group</h3>
            </div>
            <hr className="py-2 black-500" />
            <p hidden={popup} className="w-72" >Create a space where ideas flourish and connections thrive. With Next.js, building your dream community has never been easier.</p>
            <label hidden={!popup}>Name</label>
            <input hidden={!popup} value={name} onChange={(e) => setName(e.target.value)} className="p-2  border-solid border-2 border-sky-900" id="groupname" type="text" />
            <p hidden={!popup} className="py-2 text-red-800 text-center">{error}</p>
            <button hidden={!popup} onClick={handleSubmit} className="mt-2 mx-auto bg-sky-900 text-white text-center p-3 w-full hover:bg-sky-500">Create</button>
        </div>
      </div>
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
    </div>
  )
}
