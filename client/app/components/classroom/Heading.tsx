"use client"

import { useAppSelector } from "@/redux/hook"
import { useState, useEffect } from "react"

export default function Heading() {

  const state = useAppSelector(state => state);
  const [name,setName] = useState(`Welcome Back ${state.username}`);

  useEffect(() => {
    setTimeout(() => {
      setName("");
    },5000);
  },[])

  return (
    <div className="mx-auto my-2">
        <h1 className="text-4xl font-bold text-white text-center">{name}</h1>
    </div>
  )
}
