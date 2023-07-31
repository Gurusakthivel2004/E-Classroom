"use client"
import { useState } from "react"
import axios from "axios"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function page() {

  const UserType = {
    username: String,
    password: String
  }
  const { push } = useRouter();
  const [username,setname] = useState("");
  const[password2,setpasswor2] = useState("");
  const[password1,setpassword1] = useState("");
  const [error,setError] = useState("");
  const [pictures, setPictures] = useState<File[]>([]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setPictures([file]); 
    }
  };
  
  const handleSubmit = async () => {
    if (password1 === password2) {
      if (pictures.length > 0) {
        const formData = new FormData();
        formData.append('picture', pictures[0]); 
        formData.append('username', username);
        formData.append('password', password1);
  
        try {
          axios.post('http://localhost:6001/register', formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });

          // Registration successful, redirect to the classroom page
          push('/login');
        } catch (error: any) {
          setError(error.response?.data.msg || 'An error occurred.');
        }
      } else {
        setError('Please select an image to upload');
      }
    } else {
      setError('Passwords do not match');
    }
  };

  return (
    <div data-aos="fade-left" className="flex h-screen justify-center items-center bg-sky-900"> 
        <div className="bg-white p-12 relative flex flex-col items-center justify-between">
            <div className="flex items-center justify-between">
                <Image
                src="/5920.jpg"
                width={100}
                height={100}
                alt="Logo"
                />
                <h1 className='font-bold text-sky-900'>CLASSROOM</h1>
            </div>
            <div className="flex flex-col text-sky-900">

              <div className="flex items-center justify-center p-4 mr-3 rounded-full text-sky-900 bg-gray-200 w-auto">
                    <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-auto cursor-pointer">
                        <div className="flex flex-row items-center  justify-center">
                            <AccountCircleIcon />
                            <p className="pl-2">Add Profile Photo</p>    
                        </div>
                        <input id="dropzone-file" name="pictures" onChange={handleFileUpload} type="file" className="hidden" />
                    </label>
                </div> 

                {/* <input type="file" name="pictures" onChange={handleFileUpload} /> */}
                <label className="text-left font-semibold my-3">Username</label>
                <input value={username} onChange={(e) => setname(e.target.value)} className="p-2 border-solid border-2 border-sky-900 w-96" type="text"/>
                <label className="text-left font-semibold my-3">Password</label>
                <input value={password1} onChange={(e) => setpassword1(e.target.value)}  className="p-2 border-solid border-2 border-sky-900 w-96" type="password"/>
                <label className="text-left font-semibold my-3">Confirm Password</label>
                <input value={password2} onChange={(e) => setpasswor2(e.target.value)}  className="p-2 border-solid border-2 border-sky-900 w-96" type="password"/>
                <p className="mx-auto text-red-900 pt-2">{error}</p>
                <button onClick={handleSubmit} className="p-3 px-6 pt-2 mt-6 text-bold text-white bg-sky-900 baseline hover:bg-sky-700 hover:text-white">Register</button>
                <Link className="mt-6 text-center hover:text-sky-900" href={"/login"}><p>Already have an account? Log in here</p></Link>
            </div>
        </div>
        
    </div>
  )
}
