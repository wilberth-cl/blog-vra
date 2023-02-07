import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MyRoutes from './component/MyRoutes';

import axios from 'axios';
const baseURL = 'https://jsonplaceholder.typicode.com/posts/1';

function App() {

  const [post, setPost] = React.useState(null);
  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;

  return (
    <BrowserRouter>
      <div className="mx-auto overflow-hidden">

        <MyRoutes />
       
      </div>
      <div>
        <h1>{post.userId}</h1>
        <p>{post.id}</p>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
      </div>
    </BrowserRouter>
  );

}

export default App;
