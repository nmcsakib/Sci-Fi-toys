import { createBrowserRouter } from "react-router-dom";
import Main from "../Components/Layouts/Main";
import Home from "../Components/Layouts/HomePage/Home";
import Login from "../Components/Pages/Login";
import Register from "../Components/Pages/Register";

 const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: 'login',
                element: <Login/>
            },
            {
                path: 'register',
                element: <Register/>
            }
            
        ]
    }
])
export default router