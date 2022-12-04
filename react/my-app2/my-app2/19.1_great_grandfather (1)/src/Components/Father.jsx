import React , {useContext , useEffect} from 'react'
import Son from "./Son"
import {context} from "../App"



function Father() {
  const ctx = useContext(context)
  // console.log(context);
  useEffect(() => {
    ctx.setArrayOfGifts(["ball","doll","dress","money"]); 
    console.log(ctx.arrayOfGifts);
  },[])
  return (
    <div>Father
      {console.log(ctx)};
      <Son/>
    </div>
  )
}

export default Father