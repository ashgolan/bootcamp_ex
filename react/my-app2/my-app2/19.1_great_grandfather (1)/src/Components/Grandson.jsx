import React , {useContext} from 'react'
import {context} from "../App"

function Grandson() {
  const ctx = useContext(context)
  const gifts = ctx.arrayOfGifts.map(gift => {
    return (<div>{gift}</div>)
  })
  return (
    <div>{gifts}</div>
  )
}

export default Grandson