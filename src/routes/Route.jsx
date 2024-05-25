import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Blogs from "../Pages/shared/Blogs/Blogs";
import Details from "../Pages/shared/Details/Details";
import LoginLayout from "../Layout/LoginLayout/LoginLayout";
import Login from "../Pages/shared/Login/Login/Login";
import Register from "../Pages/shared/Login/Register/Register";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/login',
        element: <LoginLayout></LoginLayout>,
        children: [

            {
                path: '/login',
                element: <Login></Login>

            },

        ]
    }
    ,
    {
        path: 'register',
        element: <Register></Register>
    }
    ,
    {
        path: '/',
        element: <Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },



        ]
    },
    {
        path: '/chef/:id',
        element: <PrivateRoute>
            <Details></Details>
        </PrivateRoute>,
        loader: ({ params }) => fetch('https://food-recipe-server-junaidhasan75.vercel.app/chef')

    }
    ,
    {
        path: 'blogs',
        element: <Blogs></Blogs>
    }

]);
export default router;