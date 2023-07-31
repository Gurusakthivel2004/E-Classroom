"use client"

import AddIcon from '@mui/icons-material/Add';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useAppSelector } from '@/redux/hook';
import axios from 'axios';
import { useState } from "react"


export default function CreateNote() {

    const [popup,toggle] = useState(true);
    const [name,setName] = useState("");
    const [description,setDescription] = useState("");
    const [error,setErrormsg] = useState("")
    const state = useAppSelector(state => state)
    const [notes, setnotes] = useState(state.notes)
    
    const handleClick = () => {
        toggle((prev) => !prev)
    }

    const handleSubmit = () => {
        const data = {
            username: state.username,
            title : name,
            description : description,
            date: new Date().toString()
        }
        axios.post('http://localhost:6001/postNotes',data, {
            headers : {'Authorization': `Bearer ${state.token}`}
        })
        .then(data => {
            console.log(data);
            setName('')
            setDescription('')
        })
    }

  return (
    <div className="flex mb-6 h-[250px] w-full">
        <div  className="bg-white h-max p-6 w-full relative flex flex-col items-center justify-between ">
            <div className="flex flex-col w-full">
                <div className="flex items-center justify-between flex-row pb-2">
                {/* <h3 hidden={popup} className="text-center">Create Note</h3> */}
                {/* <AddIcon style={{display: popup === false ? 'block' : 'none'}} onClick={handleClick} className="mr-2 rounded-full cursor-pointer hover:bg-sky-100" /> */}
                </div>
                <div className="flex items-center flex-row pb-2">
                {/* <ArrowBackIcon style={{display: popup === true ? 'block' : 'none'}} onClick={handleClick} className="rounded-full cursor-pointer hover:bg-sky-100" />  */}
                <h3 hidden={!popup} className="mx-auto">Create Note</h3>
                </div>
                <hr className="py-2 black-500" />
                {/* <p hidden={popup} className="w-72" >Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p> */}
                <label hidden={!popup}>Title</label>
                <input hidden={!popup} value={name} onChange={(e) => setName(e.target.value)} className="p-2  border-solid border-2 border-sky-900" id="groupname" type="text" />
                <label hidden={!popup}>Caption</label>
                <input hidden={!popup} value={description} onChange={(e) => setDescription(e.target.value)} className="p-2  border-solid border-2 border-sky-900" id="groupname" type="text" />
                <p hidden={!popup} className="py-2 text-red-800 text-center">{error}</p>
                <button hidden={!popup} onClick={handleSubmit} className="mt-2 mx-auto bg-sky-900 text-white text-center p-3 w-full hover:bg-sky-500">ADD</button>
            </div>
        </div>
    </div>
  )
}