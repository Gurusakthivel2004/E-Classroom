"use client"

import { useAppSelector, useAppDispatch } from "@/redux/hook";
import { useEffect, useState } from "react";
import { setcurrentGroup } from "@/redux/features/authSlice";
import axios from "axios";
import Navbar from "../components/classroom/Navbar"
import DuoIcon from '@mui/icons-material/Duo';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import JoinCLass from "../components/classroom/JoinCLass";
import CreateGroup from "../components/classroom/CreateGroup";
import CreatePost from "../components/classroom/CreatePost";

export default function page() {

    const state: any = useAppSelector((state) => state);
    const token = state.token
    const dispatch = useAppDispatch()
    const [posts, setPosts] = useState([]);
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [userData, setUserData] = useState<any>(null);
    const [path, setPath] = useState('');
    const [error, setError] = useState('');
    const [groups, setGroups] = useState<any>({});
    const [current, setCurrent] = useState<Group | undefined>(undefined);
    const [pictures, setPictures] = useState<File[]>([]);
    const [filenam,setfilename] = useState<any>('')

    useEffect(() => {
        const fetchData = async () => {
          try {
            const userDataResponse = await axios.post('http://localhost:6001/getuserdata', { username: state.username }, {
                headers : {'Authorization': `Bearer ${token}`}
            });
            const userData = userDataResponse.data;
            setUserData(userData);
            setPath(`http://localhost:6001/${userData.picturePath}`);
            setUsername(userData.username);
            setName('MERN Stack');
            const groupDataResponse = await axios.post('http://localhost:6001/getgroupdata', { group_data: userData.groups },{
                headers : {'Authorization': `Bearer ${token}`}
            });
            const groupData = groupDataResponse.data;
            setGroups(groupData);
            if (groupData && Object.keys(groupData).length > 0) {
              setCurrent(groupData[0]);
            }
          } catch (error : any) {
            setError(error);
          }
        };
        fetchData();
        console.log(current);
    }, [state.username]);

    useEffect(() => {
        const fetchPost = async () => {
            const postsResponse = await axios.post(
                'http://localhost:6001/getgroupposts',
                { group_name: current ? current.group_name : 'none'},
                {
                    headers: {'Authorization': `Bearer ${token}`}
                }
            ).then((data : any) => setPosts(data.data))
        }
        fetchPost()
    },[current])


    const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setPictures([file]); 
        }
        setfilename(file && file.name);
    };

    const handleClick = (url : string) => {
        const URL = `http://localhost:6001/${url}`;
        console.log(url);
        const aTag = document.createElement('a');
        aTag.href = URL;
        aTag.setAttribute('download',url);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
    }

    const handleSubmit = async () => {
        if(pictures.length === 0 && message === ''){
            setError('Upload a file or type a message')
            return
        } 
        setError('')
        const formData = new FormData();
        if(pictures.length > 0)
            formData.append('picture', pictures[0]);
        formData.append('message', message)
        formData.append('username',state.username)
        formData.append('grp_name',current ? current.group_name : 'none')
        formData.append('profile',state.userpicture)
        formData.append('date',new Date().toDateString())
        console.log(formData);
        try {
            axios.post('http://localhost:6001/grouppost', formData, {
                headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token}`
                },
            })
            .then(data => {
                axios.post(
                    'http://localhost:6001/getgroupposts',
                    { group_name: current ? current.group_name : 'none' },
                    {
                        headers: {'Authorization': `Bearer ${token}`}
                    }
                )
                .then(data => {
                    setPosts(data.data);
                })
                setMessage('')
                setfilename('')
            })
            .catch(error => console.log(error))
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div data-aos="fade-left">
            <Navbar />

            <section className="flex flex-row h-full">

                {/* Groups */}
                <div className="bg-white text-sky-900 h-1/2 p-6 w-1/3 m-12 flex flex-col items-center justify-center">
                        
                        {
                            Object.keys(groups).length === 0  ? <div className="text-center">Join or Create groups to access all the features</div>
                            : groups && Object.values(groups).map((group : any) => (
                                <div onClick={() => {
                                    setCurrent(group)
                                    setcurrentGroup(group)
                                }} className="flex flex-row py-4 px-2 justify-center  items-center w-full cursor-pointer hover:bg-gray-200">
                                    <p className="text-center m-auto">{group && group.group_name}</p>
                                </div>
                        ))}
                        
                </div>
                

                {/* Chat Box */}
                <div className="flex flex-col bg-white h-auto w-2/3 m-12 p-6 cursor-pointer">

                    {
                        current ? (
                            <div>
                                <div className='flex flex-row p-2 justify-center border-solid border-b-2 border-sky-900 items-center w-full'>
                                    <img className='w-12 mr-auto flex rounded-full' style={{height:'3rem',objectFit:'cover'}} src={path} alt="friends"/>
                                    <p className='text-center text-1xl text-sky-900 w-full font-semibold'>{current.group_name}</p>
                                </div>

                                <div className="flex flex-col h-96 p-6 text-center overflow-auto">

                                    {
                                        Object.values(posts).map((post: any) => (
                                            <div className="flex flex-row py-3">
                                                <img className='w-12 h-fit flex rounded-full' style={{height:'3rem',objectFit:'cover'}}  src={`http://localhost:6001/${post.profile}`} alt="friends"/>
                                                <div className="flex flex-col w-auto  items-center justify-center  text-white ">
                                                    {post.picturePath ? <button onClick={() => handleClick(post.picturePath)} className="w-4/5 border-solid border-2 border-sky-900 p-2 text-sky-900 text-sky-900 flex rounded-md">{post.picturePath}</button>: <></> }                                                
                                                    {post.message === '' ? <></> :
                                                    <div className="flex p-3 mt-2 text-center px-6 justify-center items-center bg-sky-900 ml-3 rounded-l-full rounded-r-full w-auto text-white">
                                                        {post.message ? post.message : ``}
                                                    </div>
                                                    }  
                                                </div>
                                            </div>
                                        ))
                                    }

                                </div>

                                {error || filenam ? 
                                    <div className="p-2 px-4 flex items-center justify-center bg-gray-100 rounded-3xl w-full">
                                        <p className="text-red-500 text-center">{error}</p>
                                        <p className="text-center w-max">{filenam}</p>
                                    </div>
                                    : <></>
                                }
                               

                                <div className='flex flex-row pt-6 p-2 justify-center items-center w-full'>
                                    <div className="flex items-center justify-center p-4 mr-3 rounded-full bg-gray-200 w-auto ml-auto cursor-pointer ">
                                        <DuoIcon />
                                    </div>
                                    
                                    <div className="flex items-center justify-center p-4 mr-3 rounded-full bg-gray-200 w-auto">
                                        <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-auto cursor-pointer">
                                            <div className="flex flex-col items-center justify-center">
                                                <AttachFileIcon />    
                                            </div>
                                            <input name="pictures" onChange={handleFileUpload} id="dropzone-file" type="file" className="hidden" />
                                        </label>
                                    </div> 

                                    <input value={message} onChange={(e) => setMessage(e.target.value)} className="p-3 w-1/2 border-solid border-2 border-sky-900" placeholder="Start texting..." type="text" />
                                    <button onClick={handleSubmit} className="mr-auto w-auto bg-sky-900 text-white text-center p-3 border-solid border-2 border-sky-900 hover:text-sky-900 hover:bg-sky-100 hover:border-sky-100">Submit</button>
                                </div>
                            </div>
                        ) : <div>Join Group</div>
                    }

                    
                </div>
                {/* Members */}
                <div className="text-sky-900 h-1/2 w-1/3 m-12 flex flex-col items-center justify-between">
                    <CreateGroup />
                    <div className="my-auto w-full">
                        <JoinCLass />
                    </div>
                {/* <JoinCLass /> */}
                </div>

            </section>
        </div>
    )
}
