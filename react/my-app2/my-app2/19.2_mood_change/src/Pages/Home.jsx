
import {contextNightAndDay} from "../App"
import React , {useContext , useEffect} from 'react'


function Home() {
  const ctx = useContext(contextNightAndDay)

  return (
    <div style={{backgroundColor:(ctx.day) ? "white" : "grey" ,color:(ctx.day) ? "grey" : "white" , height:"100vh"}}>Home</div>
  )
}

export default Home