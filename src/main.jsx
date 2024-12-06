import './index.css'
import ReactDOM from 'react-dom';
import {
  RouterProvider
} from "react-router-dom";
import { router } from './routes/Routes';



ReactDOM.createRoot(document.getElementById("root")).render(

    <RouterProvider router={router} />

)
