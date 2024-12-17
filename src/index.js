import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Errorpage from './pages/Errorpage';
import Homepage from './pages/Homepage';
import Shoppage from './pages/Shoppage';
import Pradaktpage from './pages/Pradaktpage';
import Bagpage from './pages/Bagpage';
const myRouter =createBrowserRouter([{
  errorElement:<Errorpage/>,
  element:<App/>,
  path:"/",
  children:[
    {
      path:"/",
      element:<Homepage/>
    },
    {
      path:'/shop',
      element:<Shoppage/>
    },
    {
      path:"/pradakt",
      element:<Pradaktpage/>
    },
    {
      path:"/bag",
      element:<Bagpage/>
    }


  ]

}])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<RouterProvider  router={myRouter}/>
  </React.StrictMode>
);


