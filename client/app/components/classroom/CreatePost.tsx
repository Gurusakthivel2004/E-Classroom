import ImageIcon from '@mui/icons-material/Image';
import { useState, useEffect } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { useAppSelector, useAppDispatch } from '@/redux/hook';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { setPosts } from '@/redux/features/authSlice';

export default function CreatePost(props : any) {
  const username: string = useAppSelector((state) => state.username);
  const userPicture = useAppSelector((state) => state.userpicture);
  const token = useAppSelector((state) => state.token);
  const [caption, setCaption] = useState('');
  const [error, setErrorMsg] = useState('');
  const [pictures, setPictures] = useState<File[]>([]);
  const [filename, setFilename] = useState('');
  const {push}= useRouter();
  const dispatch = useAppDispatch()


  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setPictures([file]);
      setFilename(file.name);
    }
  };

  const handleSubmit = async () => {
    if (pictures.length > 0) {
      const formData = new FormData();
      formData.append('caption', caption);
      formData.append('picture', pictures[0]);
      formData.append('username', username);
      formData.append('userPicture', userPicture);

      try {
        const request = axios.post('http://localhost:6001/addPost', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`
          },
        }).then(response => {
            setCaption('');
            setPictures([]);
            setFilename('');
            dispatch(setPosts(response.data))
            props.postUpload()
        })
      } catch (error: any) {
        setErrorMsg(error.response?.data.msg || 'An error occurred.');
      }
    } else {
      setErrorMsg('Please select an image to upload');
    }
  };

  

  return (
    <div className="bg-white w-full h-full text-sky-900 mb-6">
      <div className="flex flex-col p-6">
        <h1 className="pb-3">CreatePost</h1>
        <hr />
        {filename ? (
          <div className="p-2 pt-2 mt-2 flex items-center flex-row px-2 justify-center bg-gray-100 rounded-3xl w-full cursor-pointer">
            <p className="text-start pl-3 pr-auto w-full">{filename}</p>
            <div onClick={() => {
              setPictures([]);
              setFilename('');
            }}>
              <CloseIcon />
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center p-4 mr-3 my-4 rounded-full text-sky-900 bg-gray-200 w-auto">
            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-auto cursor-pointer">
              <div className="flex flex-row items-center justify-center">
                <ImageIcon />
                <p className="pl-2">Add Profile Photo</p>
              </div>
              <input id="dropzone-file" name="pictures" onChange={handleFileUpload} type="file" className="hidden" />
            </label>
          </div>
        )}

        <label>Caption</label>
        <textarea value={caption} onChange={(e) => setCaption(e.target.value)} id="w3review" name="w3review" className="border-solid border-2 border-sky-900"></textarea>
        <button onClick={handleSubmit} type="submit" className="mt-2 mx-auto bg-sky-900 text-white text-center p-3 w-full hover:bg-sky-500">Create</button>
      </div>
    </div>
  );
}
