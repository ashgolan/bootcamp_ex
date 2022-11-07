import React from 'react'


function Text(props) {
  return (
    <div>
      {console.log(props)}
      <h1>{props.title}</h1>
      <p>{props.desc}</p>
      <a>{props.link1}</a>
      <a>{props.link2}</a>
    </div>
  )
}

export default Text

