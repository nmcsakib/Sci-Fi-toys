import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Layout/HomePage/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Main from "../Components/Layout/Main";
import AllToys from "../Pages/AllToys/AllToys";
import AddToy from "../Pages/AddToy";
import PrivateRoute from "./PrivateRoute";
import MyToys from "../Pages/MyToys";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Blog from "../Pages/Blog/Blog";
import ToyDetails from "../Pages/AllToys/ToyDetails/ToyDetails";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'all-toys',
                element: <AllToys />,
                loader: () => fetch('https://sci-fi-toy-server-nmcsakib.vercel.app/allToys')
            },
            {
                path: '/toy/:id',
                element: <ToyDetails />,

            },
            {
                path: '/my-toys',
                element: <PrivateRoute><MyToys /></PrivateRoute>
            },
            {
                path: 'add-a-toy',
                element: <PrivateRoute><AddToy /></PrivateRoute>,
            },
            {
                path: 'blogs',
                element: <Blog />,
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            }

        ]
    }
])
export default router