// import logo from './logo.svg';
// import './App.css';
// import { useQuery, gql } from '@apollo/client';

// const GET_POSTS = gql`
//   query GetPosts {
//     posts {
//       _id
//       title
//       body
//     }
//   }
// `;

// function Posts() {
//   const { loading, error, data } = useQuery(GET_POSTS);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error :</p>;

//   return data.posts.map(({ _id, title, body }) => (
//     <div key={_id}>
//       <p>{title}</p>
//       <p>{body}</p>
//     </div>
//   ));
// }

// function App() {
//   return (
//     <div>
//       <h2>My first Apollo app 🚀</h2>
//       <br/>
//       <Posts />
//     </div>
//   );
// }

// export default App;


import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Post from './components/Post/Post'
import Profile from './components/Profilee/Profile'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Timelinee from './components/Timeline/Timeline'
import background from './components/background.jpg'
import Community from './components/Community/Community'
import CommunityProfile from './components/Community/CommunityProfile'


export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div style={
        {
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover'
        }
      }>
      <Navbar/>
      <Post/>
      <Footer/>
      </div>
    },
    {
      path: "/create",
      element: <><Navbar/><Footer/></>,
    },
    {
      path: "/timeline",
      element: <><Navbar/> <Timelinee/> <Footer/></>,
    },
    {
      path: "/community",
      element: <><Navbar/> <Community/> <Footer/></>,
    },
    {
      path: "/profile",
      element: <><Navbar/> <Profile/> <Footer/></>,
    },
    {
      path: '/ccc',
      element: <><Navbar/> <CommunityProfile/> <Footer/></>,
    }
  ]);
  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}