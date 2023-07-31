"use client"
import AddIcon from '@mui/icons-material/Add';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useAppSelector } from '@/redux/hook';
import { useRouter } from "next/navigation";
import { useState } from "react"

export default function CreateRoom() {

    const [popup,toggle] = useState(false);
    const [name,setName] = useState("");
    const [description,setDescription] = useState("");
    const [error,setErrormsg] = useState("")
    
    const handleClick = () => {
        toggle((prev) => !prev)
    }
    const handleSubmit = () => {

    }

    return (
        <div className="flex mb-6 h-[250px] w-full">
            <div  className="bg-white h-max p-6 w-full relative flex flex-col items-center justify-between ">
                <div className="flex flex-col w-full">
                    <div className="flex items-center justify-between flex-row pb-2">
                    <h3 hidden={popup} className="text-center">Create Room</h3>
                    <AddIcon style={{display: popup === false ? 'block' : 'none'}} onClick={handleClick} className="mr-2 rounded-full cursor-pointer hover:bg-sky-100" />
                    </div>
                    <div className="flex items-center flex-row pb-2">
                    <ArrowBackIcon style={{display: popup === true ? 'block' : 'none'}} onClick={handleClick} className="rounded-full cursor-pointer hover:bg-sky-100" /> 
                    <h3 hidden={!popup} className="mx-auto">Create Room</h3>
                    </div>
                    <hr className="py-2 black-500" />
                    <p hidden={popup} className="w-72" >Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                    <label hidden={!popup}>Room</label>
                    <input hidden={!popup} value={name} onChange={(e) => setName(e.target.value)} className="p-2  border-solid border-2 border-sky-900" id="groupname" type="text" />
                    <p hidden={!popup} className="py-2 text-red-800 text-center">{error}</p>
                    <button hidden={!popup} onClick={handleSubmit} className="mt-2 mx-auto bg-sky-900 text-white text-center p-3 w-full hover:bg-sky-500">Join Room</button>
                </div>
            </div>
        </div>
    )
}
