import React from 'react'

function Image(props) {
  // let imgLink = "https://media.istockphoto.com/id/1300163718/photo/blurred-of-tropical-colorful-sunset-over-ocean-on-the-beach-at-thailand-tourism-background.jpg?b=1&s=170667a&w=0&k=20&c=OOaQfZq3qB_hkf-uv85fNxyaYB65e6h1yYb8Q2hiMVo="
  return (
    <div>
      {console.log(props)}
      <img src={props.img}></img>
    </div >
  )
}

export default Image