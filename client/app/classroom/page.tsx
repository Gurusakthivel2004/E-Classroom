"use client"
import Navbar from "../components/classroom/Navbar"
import CreateGroup from "../components/classroom/CreateGroup"
import FriendsList from "../components/FriendList/FriendsList"
import CreatePost from "../components/classroom/CreatePost"
import CreateRoom from "../components/classroom/CreateRoom"
import PostsFeed from "../components/classroom/PostsFeed"
import FriendsCarousal from "../components/classroom/FriendsCarousal"
import Footer from "../components/Footer"
import axios from "axios"
import { useState, useEffect } from 'react'
import { setPosts, setFriends } from "@/redux/features/authSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import JoinCLass from "../components/classroom/JoinCLass"

export default function Page() {

  const dispatch = useAppDispatch();
  const state : any = useAppSelector((state) => state)
  const token = state.token
  const [posts,setposts] = useState<Array<any>>(state.posts)
  const [friendsData,setfriendsData] = useState<Array<any>>(state.friends)
  const [userdata, setuserdata] = useState<Array<any>>([])
  const [show,toggle] = useState(false)
  const [comments,setcomments] = useState([])
  const [comment,setcomment] = useState("")
  const [post, setcurrentPost] = useState(null)

  const fetchPosts = async () => {
    //GetUserData
    axios.post('http://localhost:6001/getuserdata', { username: state.username }, {
        headers : {'Authorization': `Bearer ${state.token}`}
    })
    .then(data => {
      setuserdata(data.data.friends)
    })
    //GetFriendsData
    axios.get('http://localhost:6001/getfriendsdata', {
      headers : {'Authorization': `Bearer ${state.token}`, 'username': `${state.username}`}
    })
    .then(data => {
      dispatch(setFriends(data.data))
      setfriendsData(data.data)
    })
    //GetComments
    // fetchComment()
    //GetPosts
    axios.post('http://localhost:6001/getposts',{id: "1"},{
        headers: {'Authorization': `Bearer ${token}`}
    })
    .then(data => {
        dispatch(setPosts(data.data))
        setposts(data.data)
    })
    .catch((error : Error) => console.log(error))
  }

  const fetchComment = () => {
    if(post){
      console.log(post);
      axios.get('http://localhost:6001/getcomments', {
        headers : {'Authorization': `Bearer ${state.token}`, 'currentpost': `${post}`}
      })
      .then(data => {
        setcomments(data.data)
      })
    }
  }

  const handleiconClick = (po : any) => {
    setcurrentPost(po)
    toggle((prev : any) => !prev)
    fetchPosts()
  }
  
  const handleLikes = (post : any) => {
    axios.post('http://localhost:6001/updateLikes',{username: state.username,post: post},{
        headers: {'Authorization': `Bearer ${token}`}
    })
    .then(data => {
      fetchPosts()
    })
    .catch((error : Error) => {})
  }

  const handleDislikes = (post: any) => {
    axios.post('http://localhost:6001/updatedisLikes',{username: state.username,post: post}, {
        headers: {'Authorization': `Bearer ${token}`}
    })
    .then(data => {
        fetchPosts()
    })
    .catch((error : Error) => {})
  }

  const addfriend = (post : any) => {
    axios.post('http://localhost:6001/addFriend',{currentUser: state.username,requestedUser: post.username},{
        headers: {'Authorization': `Bearer ${token}`}
    })
    .then(data => fetchPosts())
    .catch((error : Error) => {})
  }

  const removeFriend = (post : any) => {
    axios.post('http://localhost:6001/removeFriend',{currentUser: state.username,requestedUser: post.username},{
        headers: {'Authorization': `Bearer ${token}`}
    })
    .then(data => fetchPosts())
    .catch((error : Error) => {})
  }

  const postUpload = () => {
    fetchPosts()
  }

  const handleCommentSubmit = (post : any, comment : string) => {
    if(comment === "") return
    axios.post('http://localhost:6001/postComment',{post: post,picture: state.userpicture, comment: comment},{
        headers: {'Authorization': `Bearer ${token}`}
    })
    .then(data => {
      setcomment("")
      fetchPosts()
    })
    .catch((error : Error) => {})
  }

  useEffect(() => {
    fetchPosts()
  },[])
  
    return (

      <div data-aos="fade=left">

        <Navbar />

        <div className="flex flex-col w-full justify-center items-center h-full md:flex-row md:justify-start md:items-start">
          
          <div className="flex flex-col md:ml-12 w-80 my-12">
            <CreateGroup data-aos="fade-left"/>
            <FriendsList userdata={userdata} friendsData={friendsData}  data-aos="fade-left" />
          </div>

          <div data-aos="fade-left" className="flex flex-col w-full  px-12 w-80">
            <PostsFeed handleiconClick={handleiconClick} comments={comments} setcurrentPost={setcurrentPost} show={show} toggle={toggle} comment={comment} setcomment={setcomment} handleCommentSubmit={handleCommentSubmit} posts={posts} userdata={userdata} removeFriend={removeFriend} friendsData={friendsData} addFriend={addfriend} likes={handleLikes} dislikes={handleDislikes} /> 
          </div>

          <div data-aos="fade-left" className="flex flex-col items-center justify-center mx-auto w-80 mt-12 md:ml-auto md:mr-12 ">
            <CreatePost posts={posts} postUpload={postUpload}/>
            <JoinCLass />
          </div>

        </div>

        <Footer />
      </div>
    )
}