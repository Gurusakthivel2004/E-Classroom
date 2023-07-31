"use client"
import Navbar from "../components/classroom/Navbar"
import CreateNote from "../components/notes/CreateNote"
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useAppSelector, useAppDispatch } from '@/redux/hook'
import axios from 'axios';
import { useState, useEffect } from "react"
import { setNotes } from "@/redux/features/authSlice";
import { useDispatch } from "react-redux";

export default function page() {

    const [flag,toggle] = useState(false)
    const [name,setName] = useState("")
    const [description,setDescription] = useState("")
    const [olddescription,setoldDescription] = useState("")
    const [error,setErrormsg] = useState("")
    const state = useAppSelector(state => state)
    const [notes, setnotes] = useState(state.notes)
    const dispatch = useDispatch()
    const arr = [1,1,1,1,1]

    const fetchNotes = () => {
        axios.get('http://localhost:6001/getNotes', {
            headers : {'Authorization': `Bearer ${state.token}`, 'username' : state.username }
        })
        .then(data => {
            setnotes(data.data)
            dispatch(setNotes(data.data))
            setName('')
            setDescription('')
        })
    }

    useEffect(() => {
        fetchNotes()
    },[])

    const handleClick = () => {
        toggle((prev) => !prev)
    }

    const handleSubmit = () => {
        const data = {
            username: state.username,
            title : name,
            description : description,
            date: new Date().toDateString()
        }
        if(flag){
            const editdata = {
                username: state.username,
                title : name,
                description : description,
                olddescription: olddescription,
                date: new Date().toDateString()
            }
            axios.post('http://localhost:6001/editNotes',editdata, {
                headers : {'Authorization': `Bearer ${state.token}`}
            })
            .then(data => {
                toggle(false)
                setName('')
                setDescription('')
                fetchNotes()
            })
        } else {
            axios.post('http://localhost:6001/postNotes',data, {
                headers : {'Authorization': `Bearer ${state.token}`}
            })
            .then(data => {
                setName('')
                setDescription('')
                fetchNotes()
            })
        }
    }

    const edit = (note : any) => {
        toggle(true)
        setName(note.title)
        setDescription(note.description)
        setoldDescription(note.description)
    }

    const deleteNote = (note : any) => {
        axios.delete('http://localhost:6001/deletenote', {
            headers : {'Authorization': `Bearer ${state.token}`},
            data: {note: note, username: state.username}
        })
        .then(data => {
            fetchNotes()
        })
    }

    return (
        <div>
            <Navbar />
            <div className="flex flex-col md:flex-row items-center justify-center md:items-start my-12">
                <div className="flex flex-col items-center justify-center p-2 w-auto">
                    <div className="w-80 md:ml-12 my-12 md:my-2">
                        {/* <CreateNote /> */}

                        <div className="flex mb-6 h-[250px] w-full pr">
                            <div  className="bg-white h-max p-6 w-full relative flex flex-col items-center justify-between ">
                                <div className="flex flex-col w-full">
                                    <div className="flex items-center justify-between flex-row pb-2">
                                    </div>
                                    <div className="flex items-center flex-row pb-2">
                                    <h3  className="mx-auto">Create Note</h3>
                                    </div>
                                    <hr className="py-2 black-500" />
                                    <label>Title</label>
                                    <input value={name} onChange={(e) => setName(e.target.value)} className="p-2  border-solid border-2 border-sky-900" id="groupname" type="text" />
                                    <label>Caption</label>
                                    <input value={description} onChange={(e) => setDescription(e.target.value)} className="p-2  border-solid border-2 border-sky-900" id="groupname" type="text" />
                                    <p  className="py-2 text-red-800 text-center">{error}</p>
                                    <button onClick={handleSubmit} className="mt-2 mx-auto bg-sky-900 text-white text-center p-3 w-full hover:bg-sky-500">ADD</button>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
                <div className="flex flex-col items-center md:items-start justify-start w-full ">
                    <div className="flex flex-wrap justify-center md:justify-start p-3 md:ml-12 w-auto">
                        {
                            notes.map((note : any) => (
                                <div className="bg-white p-2 my-2 flex flex-col items-center justify-center w-72 mx-6">
                                    <div className="flex flex-row justify-between w-full py-3">
                                        <h3 className="pl-6 text-center font-display font-semibold">{note.title}</h3>
                                        <p className="p-0 text-end w-full text-display pr-6 text-sm">{note.date}</p>
                                    </div>
                                    <p className="px-6 pt-2 text-start w-full font-display">{note.description}</p>
                                    <div className="flex flex-row text-sky-900 py-6 pr-6 items-end justify-end w-full cursor-pointer">
                                        <div onClick={() => edit(note)}>
                                            <EditIcon />
                                        </div>
                                        
                                        <div onClick={() => deleteNote(note)} className="pl-2">
                                            <DeleteIcon />
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}
