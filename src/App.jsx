import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MyRoutes from './component/MyRoutes';
import { usePosts } from './hooks/posts/usePosts';

function App() {
  const posts = usePosts();
  return (
    <BrowserRouter>
      <div className="mx-auto overflow-hidden">

        <MyRoutes />
        
      </div>
    </BrowserRouter>
  );

}

export default App;
