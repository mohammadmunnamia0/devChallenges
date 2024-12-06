import './index.css'
import ReactDOM from 'react-dom';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import Error from './pages/Error';
import Blog from './pages/Blog';
import Root from './Layouts/Root';
import Bookmark from './pages/Bookmark';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children : [
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/blog',
        element:<Blog></Blog>,
        loader:() => fetch("https://dev.to/api/articles?per_page&top=7"),
      },
      {
        path:'/bookmarks',
        element:<Bookmark></Bookmark>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(

    <RouterProvider router={router} />

)
