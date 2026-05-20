import React from 'react'

function CreatePost() {
  return (
    <div className="bg-[#1c1c1c] h-screen text-amber-100 border-2 flex flex-col border-amber-300 font-serif">
      <div className='m-5 flex-col justify-center align-middle'>
      <h1 className="mb-10 font-extrabold text-3xl">Create Post</h1>
      <form className='flex flex-col'>
        <input className="bg-gray-700 border-2 border-amber-300 hover:scale-103 transition-all duration-300 rounded h-50 w-100 mb-2 cursor-pointer" type="file" placeholder='Choose an image' name="image" accept="image/*"></input>
        <input className="bg-gray-700 border-2 border-amber-300 p-1 hover:scale-103 transition-all duration-300 rounded w-100 mb-2" type="text" name="caption" required placeholder='Caption'/>
        <button type="submit"></button>

      </form>
      </div>
    </div>
  )
}

export default CreatePost