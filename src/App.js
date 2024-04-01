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
import Create from './components/Create/Create'
import background2 from './components/background2.jpg'
import background4 from './components/background4.jpg'


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
        <Navbar />
        <Post />
        <Footer />
      </div>
    },
    {
      path: "/create",
      element: <div style={
        {
          backgroundImage: `url(${background4})`,
          backgroundSize: 'cover'
        }
      }><Navbar /> <Create /> <Footer /></div>,
    },
    {
      path: "/timeline",
      element: <div style={
        {
          backgroundImage: `url(${background2})`,
          backgroundSize: 'cover',
          height: '100vh'
        }
      }><Navbar /> <Timelinee /> <Footer /></div>,
    },
    {
      path: "/community",
      element: <div style={
        {
          backgroundImage: `url(${background2})`,
          backgroundSize: 'cover',
          height: '100vh'
        }
      }><Navbar /> <Community /> <Footer /></div>,
    },
    {
      path: "/profile",
      element: <><Navbar /> <Profile /> <Footer /></>,
    },
    {
      path: '/communityProfile',
      element: <div><Navbar /> <CommunityProfile /> <Footer /></div>,
    }
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}