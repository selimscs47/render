"use client"
import React, {useState,useEffect} from 'react'
// import Button from '@/components/button'

function HomePage() {
  const[message,setMessage] =useState("initial")
  useEffect(() => {
    setMessage("Use Effect manipule etti")
      console.log(useEffect);
  }, [])
  console.log("HomePage");
  return (
    <div>
    HomePage
    {message}
    {/* <Button/> */}
    </div>
  )
}

export default HomePage