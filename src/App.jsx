import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MyRoutes from './component/MyRoutes'

function App() {

  return (
    <BrowserRouter>
      <div className="mx-auto overflow-hidden">

        <MyRoutes />
       
      </div>
    </BrowserRouter>
  );

}

export default App;
