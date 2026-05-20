import React, { useState } from 'react'

function CreatePost() {
  const [preview, setPreview] = useState(null)

  const handleImage = (e) => {
    const file = e.target.files[0]
    setPreview(URL.createObjectURL(file))
}
  return (
    <div className="bg-[#1c1c1c] h-screen text-amber-100 border-2 flex flex-col border-amber-300 font-serif">
      <div className='m-5 flex-col justify-center align-middle'>
      <h1 className="mb-10 font-extrabold text-3xl">Create Post</h1>
      <form className='flex flex-col'>
        <input onChange={handleImage} className="bg-gray-700 border-2 border-amber-300 hover:scale-103 transition-all duration-300 rounded p-2 w-100 mb-2 cursor-pointer" type="file" placeholder='Choose an image' name="image" accept="image/*"></input>
        {preview && <img src={preview} className="w-40 h-40 object-cover rounded mb-2"/>}
        <input className="bg-gray-700 border-2 border-amber-300 p-1 hover:scale-103 transition-all duration-300 rounded w-100 mb-2" type="text" name="caption" required placeholder='Caption'/>
        <button className="bg-amber-400 w-100 text-black font-bold rounded" type="submit">Post</button>

      </form>
      </div>
    </div>
  )
}

export default CreatePost