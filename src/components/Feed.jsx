import React, { useState, useEffect } from 'react';
import axios from "axios";
export default function Feed() {
  const [posts, setPosts]=useState([{
    _id:"1",
    image:"https://img.freepik.com/premium-photo/suv-is-parked-field-with-bridge-background_1153744-182204.jpg?semt=ais_hybrid&w=740&q=80",
    caption: "PBX1"
  }]);

  useEffect(()=>{
    axios.get("http://localhost:3000/posts")
    .then((res)=>{
      setPosts(res.data.posts);
      console.log(res.data);
    })
  },[]);

  return (
    <div className='bg-[#1c1c1c] w-screen h-auto font-serif flex flex-col items-center justify-center'>
    {
      posts.length > 0 ?  (
        posts.map((post)=> (
          <div key={post._id} className="bg-gray-300 mx-50 my-50 mb-5 pr-10 w-fit">
            <img className="rounded ml-3 mt-2" src={post.image} alt={post.caption} />
            <p className="text-3xl mt-5 ml-3 font-bold">{post.caption}</p>
          </div>
        ))
      ):(
        <h1>No Posts Yet!</h1>
      )
      }
      </div>
  )
}
