import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import BookServices from "../Pages/BookServices/BookServices";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRouth from "./PrivateRouth";
import About from "../Pages/Home/About/About";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
         path: '/',
         element: <Home></Home>
        },
        {
          path:'/about',
          element: <About></About>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        },
        {
          path: 'book/:id',
          element: <PrivateRouth><BookServices></BookServices></PrivateRouth>,
          loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path:'bookings',
          element: <PrivateRouth><Bookings></Bookings></PrivateRouth>
        }
      ]
    },
  ]);

  export default router