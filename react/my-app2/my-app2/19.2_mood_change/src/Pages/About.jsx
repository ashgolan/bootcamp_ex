import {contextNightAndDay} from "../App"
import React , {useContext , useEffect} from 'react'


function About() {
  const ctx = useContext(contextNightAndDay)
  console.log(ctx.day);

  return (
    <div style={{backgroundColor:(ctx.day) ? "white" : "grey" ,color:(ctx.day) ? "grey" : "white" ,height:"100vh"}}>About</div>
  )
}

export default About