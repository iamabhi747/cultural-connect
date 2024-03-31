import React from 'react'

function create() {
  return (
    <div className='ml-4'>
     <h1 className='text-center text-xl mt-2 font-bold'>CREATING THE POST</h1> 
     <form>
      <label className='font-bold'>Title :</label>
     <input type="text" required className='border-black m-3  border-1' placeholder='Name' /> <br />

     <textarea rows="4" className='border-1 border-black' cols="50" name="comment" form="usrform" placeholder='Description...'></textarea> <br />

     <label for="img" className='mr-3 font-bold'>Select image :</label>
    <input required type="url" id="img" name="img" multiple className='border-1 border-black'/> <br />
    <input className='p-2 border-1 border-black bg-gradient-to-b from-[#e49cd6] to-[#e37d11] cursor-pointer rounded-2xl mt-[6rem] mb-2 ml-32 font-bold text-white  bg-slate-300' value={'Create Post'} type="submit"/>

     </form>
    </div>
  )
}

export default create

