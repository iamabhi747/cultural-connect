import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';

const CREATE_POST = gql`
  mutation CreatePost($userid: ID!, $title: String!, $body: String!, $media: [String], $time: String!, $keywords: [String]) {
    newPost(userid: $userid, title: $title, body: $body, media: $media, time: $time, keywords: $keywords) {
      _id
    }
  }
`;

function Create() {
  const [details, setDetails] = useState({
    userid: 12,
    title: '',
    body: '',
    media: [],
    keywords: []
  })

  const [createPost, { data, loading, error }] = useMutation(CREATE_POST, {
    variables: {
      userid: details.userid,
      title: details.title,
      body: details.body,
      media: details.media,
      time: new Date().toISOString(),
      keywords: ['test']
    }
  });

  const useHandleChange = (e) => {
    console.log(e);
    const parent = e.target.parentElement;
    const title = parent.title.value;
    const body = parent.body.value;
    const imgurl = parent.imgurl.value;

    console.log(title, body, imgurl);

    setDetails({
      ...details,
      title: title,
      body: body,
      media: [imgurl]
    });

    // if (loading) console.log('loading');
    // if (error) console.log(error);
  }

  return (
    <div >
      <h1 className='text-center text-xl mt-2 font-bold '>CREATING THE POST</h1>
      <form className='flex-col justify-center items-center space-y-7'>
        <label className='font-bold ml-6'>Title :</label>
        <input type="text" required className=' m-3 rounded-sm p-2  shadow-inner shadow-gray-800 w-[74%]' placeholder='Title' /> <br />

        <textarea rows="4" className=' ml-6 shadow-inner shadow-gray-800  rounded-sm' cols="50" name="comment" form="usrform" placeholder='   Description...'></textarea> <br />

        <label htmlFor="img" className='mr-3 font-bold ml-6'>Select image :</label>
        <input required type="url" id="img" name="img" multiple className=' p-1 rounded-sm  shadow-inner shadow-gray-800' /> <br />
        <input className='p-2  bg-[#1047fd]  cursor-pointer  w-[100%] font-bold text-white' value={'Create Post'} type="submit" />

      </form>
    </div>
  )
}

export default Create

