import React from 'react'
import mountain from './mountain.jpg'
import dot from './dots.png'
import img from './c1.png'
import like from './like.png'
import chat from './chat.png'
import share from './share.png'

export default function Post() {
  return (
    <>
      <div className="card m-auto mt-2 rounded-3xl" style={
        {
            width: '25rem'
        }
      }>
    <div className="head flex w-[25rem] rounded-2xl ">
      <div className='flex w-[23rem] m-3'>
      <img src={img} alt=""className='w-[4em] h-[4rem] mr-auto' />
      <div className="info flex-col mr-[10rem] ">
        <p className='font-bold'>Heading</p>
        <p className='text-sm text-nowrap'>Added to Timeline</p>
        <p className='text-sm'>16/10/2005</p>
      </div>
      <img src={dot} alt="" className='bg-cover w-[2rem] h-[2rem] mt-3 ml-auto' />
      </div>
    </div>
    <hr />
    <div className='title bg-white text-xl font-bold ml-[1rem] text-left'>
      Spectacular UNESCO Heritage Sites In Maharashtra
    </div>
  <img src={mountain} className="card-img p-3" alt=''></img>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <div className='more flex space-x-5 h-10 mt-4'>
    <img src={like} alt="" className='h-8 coursor-pointer ml-2' />
    <img src={chat} alt="" className='h-8 ml-2' />
    <img src={share} alt="" className='h-8'/>
    </div>
  </div>
</div>
      
    </>
  )
}
