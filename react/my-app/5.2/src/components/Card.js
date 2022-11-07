import React from 'react'
import Image from './Image';
import Text from './Text';
import "./CardDesign.css"

function Card() {
  const content = {
    img: "https://media.istockphoto.com/id/1300163718/photo/blurred-of-tropical-colorful-sunset-over-ocean-on-the-beach-at-thailand-tourism-background.jpg?b=1&s=170667a&w=0&k=20&c=OOaQfZq3qB_hkf-uv85fNxyaYB65e6h1yYb8Q2hiMVo=",
    title: "A Random Title",
    desc: "Random Description",
    link1: "SHARE", link2: "EXPLORE"
  }
  return (
    <div className='card'>
      <Image img={content.img}></Image>
      <Text title={content.title} desc={content.desc} link1={content.link1} link2={content.link2}></Text>
    </div>
  )
}

export default Card