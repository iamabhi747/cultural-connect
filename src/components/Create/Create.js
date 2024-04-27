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
    keywords: [],
    category: 'Places'
  });

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
    // const parent = e.target.parentElement;
    // console.log(parent);

    // const title = parent.getElementById('ftitle').value;
    // const body = parent.getElementById('fbody').value;
    // const imgurl = parent.getElementById('imgurl').value;
    // const category = parent.getElementById('fcat').value;

    // setDetails({
    //   ...details,
    //   title: title,
    //   body: body,
    //   media: [imgurl],
    //   category: category
    // });

    // console.log(details);

    // if (loading) console.log('loading');
    // if (error) console.log(error);
  }

  return (
    <div >
      <h1 className='text-center text-xl mt-2 font-bold '>CREATING THE POST</h1>
      <form className='flex-col justify-center items-center space-y-7' onSubmit={createPost}>
        <label className='font-bold ml-6'>Title :</label>
        <input id='ftitle' name="title" type="text" required className=' m-3 rounded-sm p-2  shadow-inner shadow-gray-800 w-[74%]' placeholder='Title' onChange={useHandleChange} /> <br />

        <textarea id="fbody" rows="4" className=' ml-6 shadow-inner shadow-gray-800  rounded-sm' cols="50" name="body" form="usrform" placeholder='   Description...' onChange={useHandleChange}></textarea> <br />

        <label htmlFor="imgurl" className='mr-3 font-bold ml-6'>Select image :</label>
        <input required type="url" id="imgurl" name="imgurl" multiple className=' p-1 rounded-sm  shadow-inner shadow-gray-800' onChange={useHandleChange} /> <br />
        <div className='ml-6 flex'>
          <label htmlFor="dropdown" className='font-bold'>Category : </label>
          <select className='ml-1 p-1 shadow-black shadow-inner rounded-sm border-none ' name="category" id="fcat" onChange={useHandleChange}>
            <option value="Places" defaultValue="selected">Places</option>
            <option value="Monuments">Monuments</option>
            <option value="Religious Beliefs">Religious Beliefs</option>
            <option value="Traditions">Traditions</option>
            <option value="Recipes">Recipes</option>
            <option value="Art Forms(Dance, Music, etc)">Art Forms(Dance, Music, etc)</option>
            <option value="Pratha / Parampara">Pratha / Parampara</option>
            <option value="Cultural Events">Cultural Events</option>
          </select>
          <p className='text-red-600 font-bold ml-1 '>{`${details.category === 'Religious Beliefs' || details.category === 'Traditions' ? '* authentication required' : '' }`}</p> <br />

        </div>
        <input className='p-2  bg-[#1047fd]  cursor-pointer  w-[100%] font-bold text-white' value={'Create Post'} type="submit" />
      </form>
    </div>
  )
}

export default Create

