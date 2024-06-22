import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import Facilities from './pages/facilities/facilities.jsx';
import Collections from './pages/collections/collections.jsx';
import Feedback from './pages/feedback/feedback.jsx';
import Share from './pages/share/share.jsx';
import Basic_form from './pages/basic_form/basic_form.jsx';






const router = createBrowserRouter([

  {
    path:'/',
    element: <Facilities/>,
  },
  {
    path:'/collections',
    element: <Collections/>,
  },
  {
    path:'/feedback',
    element: <Feedback/>,
  },
  {
    path:'/share',
    element: <Share/>,
  },
  {
    path:'/submit',
    element: <Basic_form/>,
  },


])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
