import logo from './logo.svg';
import './App.css';
import { useQuery, gql } from '@apollo/client';

const GET_POSTS = gql`
  query GetPosts {
    posts {
      _id
      title
      body
    }
  }
`;

function Posts() {
  const { loading, error, data } = useQuery(GET_POSTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :</p>;

  return data.posts.map(({ _id, title, body }) => (
    <div key={_id}>
      <p>{title}</p>
      <p>{body}</p>
    </div>
  ));
}

function App() {
  return (
    <div>
      <h2>My first Apollo app 🚀</h2>
      <br/>
      <Posts />
    </div>
  );
}

export default App;
