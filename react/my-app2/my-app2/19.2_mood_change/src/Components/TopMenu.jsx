import {Link} from "react-router-dom"
import {contextNightAndDay} from "../App"
import React , {useContext , useEffect} from 'react'

function TopMenu() {
  const ctx = useContext(contextNightAndDay)
  console.log(ctx);

function toggleMode(params) {
  ctx.setDay(prev => !prev)  
}

  return (
    <div className='flex topmenu'>
      <Link to="/Home"><div>Home</div></Link>
      <Link to="/About"><div>About</div></Link>
      <button onClick={toggleMode}>{(ctx.day) ? "Make night" : "make day"}</button>
    </div>
  )
}

export default TopMenu