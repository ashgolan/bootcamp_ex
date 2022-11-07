import React from 'react'

function Button(props) {
  return (

    <button style={{ fontWeight: props.style }
    }> {props.text}
      {console.log(props)}
    </button >
  )
}

export default Button