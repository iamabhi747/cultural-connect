import React, { useState, useEffect } from "react";
import home from './home.png'
import create from './Create.jpg'
import Timeline from './Timeline.png'
import Community from './Community.png'
import Profile from './Profile.jpeg'


import {
  Link,
  useLocation
} from "react-router-dom";



function Footer() {

  const [url, setUrl] = useState("");
  const location = useLocation();

  useEffect(() => {
    setUrl(location.pathname);
    console.log(url)
  }, [location]);



  return (

    <>
      <nav className={`navbar ${url === '/' ? 'sticky' : 'fixed'} bottom-0 bg-[rgba(253,247,235,0.8)]  w-[100%] rounded-t-3xl  `} style={
        {
          boxShadow: '0.5px -0.5px rgba(0, 0, 0, 0.8)'
        }
      }>
        <div className="container-fluid ">
          <div className="home ml-5 ">
            <Link to="/">
              <img src={home} alt="" className={`h-[40px] w-[40px] sticky border-1 rounded-full p-1  border-black ${url === '/' ? 'bg-gradient-to-b from-[#0b97fb] to-[#3bf774]' : 'bg-white'
                } `}>
              </img>
              <p className='font-normal text-sm'>Home</p>
            </Link>
          </div>
          <div className="create text-sm ">
            <Link to="/create">
              <img src={create} alt="" className={`h-[38px] w-[38px] border-1  rounded-full p-[2px] border-black ${url === '/create' ? 'bg-gradient-to-b from-[#0b97fb] to-[#3bf774]' : 'bg-white'} `}>
              </img>
              <p className='font-normal text-sm'>Create</p>
            </Link>
          </div>
          <div className="timeline text-sm ">
            <Link to="/timeline">
              <img src={Timeline} alt="" className={` h-[40px] w-[40px] ml-3 border-1 rounded-full p-1 border-black ${url === '/timeline' ? 'bg-gradient-to-b from-[#0b97fb] to-[#3bf774]' : 'bg-white'} `}>
              </img>
              <p className='font-normal'>Timeline</p>
            </Link>
          </div>
          <div className="community text-sm ">
            <Link to="/community">
              <img src={Community} alt="" className={`h-[40px] w-[40px] ml-5 border-1 rounded-full p-1 border-black ${url === '/community' ? 'bg-gradient-to-b from-[#0b97fb] to-[#3bf774]' : 'bg-white'} `}>
              </img>
              <p className='font-normal'>Community</p>
            </Link>
          </div>
          <div className="profile text-sm ">
            <Link to="/profile">
              <img src={Profile} alt="" className={`h-[40px] w-[40px] mr-4 border-1 rounded-full p-1 border-black ${url === '/profile' ? 'bg-gradient-to-b from-[#0b97fb] to-[#3bf774]' : 'bg-white'}  `}>
              </img>
              <p className='font-normal'>Profile</p>
            </Link>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Footer
