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
    const title  = parent.title.value;
    const body   = parent.body.value;
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
    <>
    <div className='ml-4'>
    <h1 className='text-center text-xl mt-2 font-bold'>CREATING THE POST</h1> 
    <form onSubmit={createPost}>
      <label className='font-bold'>Title :</label>
      <input type="text" name='title' required className='border-black m-3  border-1'  placeholder='Name' onChange={useHandleChange}  /> <br />

      <textarea rows="4" className='border-1 border-black' cols="50" name="body"  placeholder='Body...' onChange={useHandleChange} ></textarea> <br />

      <label className='mr-3 font-bold'>Select image :</label>
      <input required type="url" id="img" name="imgurl" multiple className='border-1 border-black' onChange={useHandleChange}/> <br />
      <button className='p-2 border-1 border-black bg-gradient-to-b from-[#e49cd6] to-[#e37d11] cursor-pointer rounded-2xl mt-[6rem] mb-2 ml-32 font-bold text-white  bg-slate-300' type="submit" >Create Post </button>

    </form>
    </div>
    </>
  )
}

export default Create

