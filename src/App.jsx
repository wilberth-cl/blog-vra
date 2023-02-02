import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './component/layout/Navbar'
import MyRoutes from './component/MyRoutes'

function App() {

  return (
    <BrowserRouter>
      <div className="mx-auto overflow-hidden">
 
        <Navbar /> 
        <MyRoutes />
       
      </div>
    </BrowserRouter>
  );

}

export default App;
