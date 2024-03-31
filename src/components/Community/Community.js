import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import img from './c1.png'  

function Community() {
    // const[url, seturl] = useState('')
    // const elements = document.querySelectorAll('.community');

    // elements.forEach(element => {
    // element.addEventListener('click', () => {
    //     let elementName = element.innerHTML
    //     seturl(elementName)
    //     console.log(elementName)
    // });
    // });

  return (
    <>
     <div className="card m-auto mt-2 rounded-3xl" style={
        {
            width: '25rem'
        }
      } >
    <div className="head flex w-[25rem] rounded-2xl space-x-2">
      <div className='flex w-[23rem] m-3'>
      <img src={img} alt=""className='w-[4em] h-[4rem]' />
      <div className="info m-auto ">
        <NavLink to='/communityProfile' className='community font-bold text-lg mr-[8rem]'>Community 1</NavLink>
      </div> 
      </div> 
      </div> 
      </div> 
     <div className="card m-auto mt-2 rounded-3xl" style={
        {
            width: '25rem'
        }
      } >
    <div className="head flex w-[25rem] rounded-2xl space-x-2">
      <div className='flex w-[23rem] m-3'>
      <img src={img} alt=""className='w-[4em] h-[4rem]' />
      <div className="info m-auto ">
        <p className='community font-bold text-lg mr-[8rem]'>Community 2</p>
      </div> 
      </div> 
      </div> 
      </div> 
     <div className="card m-auto mt-2 rounded-3xl" style={
        {
            width: '25rem'
        }
      } >
    <div className="head flex w-[25rem] rounded-2xl space-x-2">
      <div className='flex w-[23rem] m-3'>
      <img src={img} alt=""className='w-[4em] h-[4rem]' />
      <div className="info m-auto ">
        <p className='community font-bold text-lg mr-[8rem]'>Community 3</p>
      </div> 
      </div> 
      </div> 
      </div> 
     <div className="card m-auto mt-2 rounded-3xl" style={
        {
            width: '25rem'
        }
      } >
    <div className="head flex w-[25rem] rounded-2xl space-x-2">
      <div className='flex w-[23rem] m-3'>
      <img src={img} alt=""className='w-[4em] h-[4rem]' />
      <div className="info m-auto ">
        <p className='community font-bold text-lg mr-[8rem]'>Community 4</p>
      </div> 
      </div> 
      </div> 
      </div> 
      
    </>
  )
}

export default Community
