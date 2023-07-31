"use client"
import axios from "axios"
import { Suspense } from "react"
import Navbar from "./components/Navbar"
import Account from "./components/Account"

type Params = {
  params: {
      username: string
  }
}

export default function page ({params: {username}} : Params) {
  return (
    <div data-aos="fade-left" >
      <Navbar />
      <Account data-aos="fade-left"  name={username}/>
    </div>
  )
}
