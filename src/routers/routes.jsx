import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Layout/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Main from "../Components/Layout/Main";


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