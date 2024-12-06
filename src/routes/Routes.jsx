import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Blog from "../pages/Blog";
import BlogDetails from "../pages/BlogDetails";
import Bookmark from "../pages/Bookmark";
import Content from "../components/Content";
import Author from "../components/Author";



export const router = createBrowserRouter([
    {
      path:'/',
      element:<Root></Root>,
      errorElement:<Error></Error>,
      children : [
        {
          path:'/',
          element:<Home></Home>,
        },
        {
          path:'/blog',
          element:<Blog></Blog>,
          loader:() => fetch("https://dev.to/api/articles?per_page&top=7"),
        },
        {
          path:'/blog/:id',
          element:<BlogDetails></BlogDetails>,
          loader: ({params}) => fetch(`https://dev.to/api/articles/${params.id}`),
          children:[
            {
                index:true,
                element : <Content></Content>,
                loader: ({params}) => fetch(`https://dev.to/api/articles/${params.id}`),
            },
            {
                path:'author',
                element :<Author></Author>,
                loader: ({params}) => fetch(`https://dev.to/api/articles/${params.id}`),
            }
          ]
        },
        {
          path:'/bookmarks',
          element:<Bookmark></Bookmark>
        }
      ]
    },
  ]);